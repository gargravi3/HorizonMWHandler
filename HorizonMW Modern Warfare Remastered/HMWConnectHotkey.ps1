Add-Type -AssemblyName System.Windows.Forms

$code = @"
using System;
using System.Runtime.InteropServices;

public static class HmwHotkeyWin32
{
    [DllImport("user32.dll")]
    public static extern short GetAsyncKeyState(int vKey);

    [DllImport("user32.dll")]
    public static extern bool SetForegroundWindow(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern IntPtr GetForegroundWindow();

    [DllImport("user32.dll")]
    public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);
}
"@

Add-Type $code

$currentPid = $PID
Get-CimInstance Win32_Process -Filter "Name = 'powershell.exe'" |
    Where-Object { $_.ProcessId -ne $currentPid -and $_.CommandLine -like '*HMWConnectHotkey.ps1*' } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }

$connectCommand = 'connect 127.0.0.1:27016'
$lastNoGame = $null
$f2WasDown = $false
$sawGame = $false

function Get-HmwGuestProcesses {
    $processInfo = Get-CimInstance Win32_Process -Filter "Name = 'hmw-mod.exe'" -ErrorAction SilentlyContinue
    if (!$processInfo) {
        return @()
    }

    $guestInfo = $processInfo |
        Where-Object { $_.ExecutablePath -and $_.ExecutablePath -match '\\Instance\d+\\' -and $_.ExecutablePath -notmatch '\\Instance0\\' } |
        Sort-Object ExecutablePath

    if (!$guestInfo) {
        $fallback = Get-Process hmw-mod -ErrorAction SilentlyContinue |
            Where-Object { $_.MainWindowHandle -ne 0 } |
            Sort-Object StartTime |
            Select-Object -Skip 1

        return @($fallback)
    }

    $guests = foreach ($info in $guestInfo) {
        Get-Process -Id $info.ProcessId -ErrorAction SilentlyContinue |
            Where-Object { $_.MainWindowHandle -ne 0 }
    }

    return @($guests)
}

function Set-HmwForeground($hWnd) {
    for ($i = 0; $i -lt 8; $i++) {
        [HmwHotkeyWin32]::ShowWindowAsync($hWnd, 9) | Out-Null
        [HmwHotkeyWin32]::SetForegroundWindow($hWnd) | Out-Null
        Start-Sleep -Milliseconds 250

        if ([HmwHotkeyWin32]::GetForegroundWindow() -eq $hWnd) {
            Start-Sleep -Milliseconds 350
            return $true
        }

        if ($i -eq 2) {
            [System.Windows.Forms.SendKeys]::SendWait('%')
            Start-Sleep -Milliseconds 100
        }
    }

    return $false
}

function Wait-F2Release {
    $deadline = (Get-Date).AddSeconds(3)
    while ((([HmwHotkeyWin32]::GetAsyncKeyState(0x71) -band 0x8000) -ne 0) -and ((Get-Date) -lt $deadline)) {
        Start-Sleep -Milliseconds 50
    }
    Start-Sleep -Milliseconds 350
}

function Send-HmwConnect {
    $guests = Get-HmwGuestProcesses
    if (!$guests) {
        return
    }

    foreach ($instance in $guests) {
        if (!(Set-HmwForeground $instance.MainWindowHandle)) {
            continue
        }

        [System.Windows.Forms.SendKeys]::SendWait('{~}')
        Start-Sleep -Milliseconds 500
        [System.Windows.Forms.SendKeys]::SendWait($connectCommand)
        Start-Sleep -Milliseconds 200
        [System.Windows.Forms.SendKeys]::SendWait('{ENTER}')
        Start-Sleep -Milliseconds 1000
        [System.Windows.Forms.SendKeys]::SendWait('{~}')
        Start-Sleep -Milliseconds 750
    }
}

while ($true) {
    $hmwProcesses = Get-Process hmw-mod -ErrorAction SilentlyContinue
    if (!$hmwProcesses) {
        if ($sawGame -and $null -eq $lastNoGame) {
            $lastNoGame = Get-Date
        }

        if ($sawGame -and ((Get-Date) - $lastNoGame).TotalSeconds -gt 30) {
            break
        }
    } else {
        $sawGame = $true
        $lastNoGame = $null
    }

    $f2Down = (([HmwHotkeyWin32]::GetAsyncKeyState(0x71) -band 0x8000) -ne 0)
    if ($f2Down -and -not $f2WasDown) {
        Wait-F2Release
        Send-HmwConnect
        Start-Sleep -Milliseconds 800
    }

    $f2WasDown = $f2Down
    Start-Sleep -Milliseconds 100
}
