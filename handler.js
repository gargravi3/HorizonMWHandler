Hub.Handler.Version = 1; // Released at https://hub.splitscreen.me/ on Wed Jun 12 2024 18:35:43 GMT+0000 (Coordinated Universal Time).
Hub.Handler.Id = "HorizonMWLocalPOC";
Hub.Maintainer.Name = "birden";
Hub.Maintainer.Id = "rRycxSn253ZCjQy5C";

var graphicsOptions = ["Low", "Medium", "High", "Current"];
Game.AddOption("Graphics preset", "Low is the default for better split-screen performance. Current keeps your existing config values.", "gfx", graphicsOptions);

Game.DirSymlinkExclusions = ["players2"];
Game.FileSymlinkExclusions = [
  "XInputPlus.ini",
  "xinput1_3.dll",
  "xinput1_4.dll",
  "xinput9_1_0.dll",
  "xinputplus.ini",
  "hmw-mod.exe",
  "favourites.json",
  "history.json",
  "hmwcdta",
  "hmwdta",
  "keys_mp.cfg",
  "config_mp.cfg",
  "config_mp.cfg",
  "language",
  "settings_c.zip.h1",
  "settings_m.zip.h1",
  "upshd.dat",
  "commondata",
  "mpdata"
];
Game.FileSymlinkCopyInstead = ["steam_api.dll", "steam_api.ini", "h1_sp64_ship.exe", "Steam.dll", "steam_api.dll", "steam_api64.dll", "SteamAPIUpdater.dll", "steamclient.dll", "XGamepad.dll"];
Game.GameName = "HorizonMW Modern Warfare Remastered";
Game.HandlerInterval = 100;
Game.SymlinkExe = false;
Game.SymlinkGame = true;
Game.SymlinkFolders = false;
Game.KeepSymLinkOnExit = true;
Game.ExecutableName = "hmw-mod.exe";
Game.LauncherExe = "hmw-mod.exe";
Game.LauncherExeIgnoreFileCheck = true;
Game.LaunchAsDifferentUsers = false;
Game.BinariesFolder = "";
Game.SteamID = "393080";
Game.GUID = "HorizonMW Modern Warfare Remastered";
Game.MaxPlayers = 8;
Game.MaxPlayersOneMonitor = 8;
Game.NeedsSteamEmulation = false;
Game.UseGoldberg = false;
Game.SupportsPositioning = true;
Game.ForceFinishOnPlay = false;
Game.Hook.ForceFocus = false;
Game.Hook.ForceFocusWindowName = "Call of Duty: Modern Warfare Remastered Multiplayer";
Game.HasDynamicWindowTitle = false;
Game.FakeFocus = false;
Game.HookFocus = false;
Game.BlockRawInput = false;
Game.Hook.DInputEnabled = false;
Game.Hook.DInputForceDisable = true;
Game.Hook.XInputEnabled = false;
Game.Hook.XInputReroute = false;
Game.InjectHookXinput = false;
Game.Hook.CustomDllEnabled = false;
Game.Hook.UseAlpha8CustomDll = false;
Game.SetForegroundWindowElsewhere = true;
Game.ProcessChangesAtEnd = false;
Game.KillProcessesOnClose = ["hmw-mod", "Unlock", "cmd", "close"];
Game.DontResize = false;
Game.DontRemoveBorders = false;
Game.DontReposition = false;
Game.PreventWindowDeactivation = false;
Game.KeyboardPlayerSkipPreventWindowDeactivate = false;
Game.ResetWindows = true;
Game.RefreshWindowAfterStart = true;
Game.StartArguments = "-nosteam -multiplayer";
Game.HideTaskbar = true;
Game.UseForceBindIP = false;
Game.ForceBindIPNoDummy = false;
Game.PauseBetweenStarts = 10;
Game.PauseBetweenProcessGrab = 30;
Game.UserProfileConfigPath = "AppData\\Local\\hmw-mod";
Game.UserProfileConfigPathNoCopy = true;
Game.Description =
  "HorizonMW proof-of-concept handler based on the Call of Duty Modern Warfare Remastered handler. This launches hmw-mod.exe directly, isolates players2, assigns unique names, and writes a temporary per-player HMW identity before each instance launches. Low graphics is the default, and depth of field is disabled to prevent sniper scope blur. Player 1 should host a private/custom match, then press F2 while input is unlocked to connect every other HMW instance except Instance0 to 127.0.0.1:27016.";
Game.SetWindowHook = true;

//USS deprecated options:

Game.HookSetCursorPos = false;
Game.HookGetCursorPos = false;
Game.HookGetKeyState = false;
Game.HookGetAsyncKeyState = false;
Game.HookGetKeyboardState = false;
Game.HookFilterRawInput = false;
Game.HookFilterMouseMessages = false;
Game.HookUseLegacyInput = false;
Game.HookDontUpdateLegacyInMouseMsg = false;
Game.HookMouseVisibility = false;

Game.SendNormalMouseInput = false;
Game.SendNormalKeyboardInput = false;
Game.SendScrollWheel = false;
Game.ForwardRawKeyboardInput = false;
Game.ForwardRawMouseInput = false;
Game.HookReRegisterRawInput = false;
Game.HookReRegisterRawInputMouse = false;
Game.HookReRegisterRawInputKeyboard = false;
Game.DrawFakeMouseCursor = false;

//ProtoInput:

Game.SupportsMultipleKeyboardsAndMice = true;

Game.ProtoInput.InjectStartup = false;
Game.ProtoInput.InjectRuntime_RemoteLoadMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookMethod = false;
Game.ProtoInput.InjectRuntime_EasyHookStealthMethod = true;

Game.LockInputAtStart = false;
Game.LockInputSuspendsExplorer = true;
Game.ProtoInput.FreezeExternalInputWhenInputNotLocked = true;
Game.LockInputToggleKey = 0x23;

Game.ProtoInput.RenameHandlesHook = false;
Game.ProtoInput.RenameHandles = [];
Game.ProtoInput.RenameNamedPipes = [];

Game.ProtoInput.RegisterRawInputHook = false;
Game.ProtoInput.GetRawInputDataHook = false;
Game.ProtoInput.MessageFilterHook = false;
Game.ProtoInput.GetCursorPosHook = false;
Game.ProtoInput.SetCursorPosHook = false;
Game.ProtoInput.GetKeyStateHook = false;
Game.ProtoInput.GetAsyncKeyStateHook = false;
Game.ProtoInput.GetKeyboardStateHook = false;
Game.ProtoInput.CursorVisibilityHook = false;
Game.ProtoInput.ClipCursorHook = true;
Game.ProtoInput.FocusHooks = true;
Game.ProtoInput.ClipCursorHookCreatesFakeClip = true;

Game.ProtoInput.RawInputFilter = false;
Game.ProtoInput.MouseMoveFilter = false;
Game.ProtoInput.MouseActivateFilter = false;
Game.ProtoInput.WindowActivateFilter = false;
Game.ProtoInput.WindowActvateAppFilter = false;
Game.ProtoInput.MouseWheelFilter = false;
Game.ProtoInput.MouseButtonFilter = false;
Game.ProtoInput.KeyboardButtonFilter = false;

Game.ProtoInput.SendMouseWheelMessages = true;
Game.ProtoInput.SendMouseButtonMessages = true;
Game.ProtoInput.SendMouseMovementMessages = true;
Game.ProtoInput.SendKeyboardButtonMessages = true;
Game.ProtoInput.XinputHook = true;
Game.ProtoInput.UseOpenXinput = true;

Game.ProtoInput.OnInputLocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
    ProtoInput.InstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

    //Avoid the mouse move filter unless absolutely necessary as it can massively affect performance if the game gets primary input from mouse move messages
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);

    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
    ProtoInput.EnableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
  }
};

Game.ProtoInput.OnInputUnlocked = function() {
  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetCursorPosHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.SetCursorPosHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyStateHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetAsyncKeyStateHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetKeyboardStateHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.CursorVisibilityStateHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.GetRawInputDataHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.RegisterRawInputHookID);
    ProtoInput.UninstallHook(player.ProtoInputInstanceHandle, ProtoInput.Values.MessageFilterHookID);

    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.RawInputFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseMoveFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseActivateFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.WindowActivateAppFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseWheelFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.MouseButtonFilterID);
    ProtoInput.DisableMessageFilter(player.ProtoInputInstanceHandle, ProtoInput.Values.KeyboardButtonFilterID);

    ProtoInput.SetDrawFakeCursor(player.ProtoInputInstanceHandle, false);
  }
};

//here
Game.Play = function() {
  Game.ExecutableName = "hmw-mod.exe";
  var args = "-nosteam -multiplayer +set net_port " + (27016 + Context.PlayerID * 2) + " +set r_dof_limit 0";
  Game.StartArguments = args;
  Context.StartArguments = args;

  if (Context.PlayerID == 0) {
    var monitorBat = "C:\\Nucleus\\StartMonitor.bat";
    if (System.IO.File.Exists(monitorBat)) {
      Context.RunAdditionalFiles([monitorBat], false, 0);
    }
    var hmwConnectHotkey = Context.ScriptFolder + "\\HMWConnectHotkey.bat";
    if (System.IO.File.Exists(hmwConnectHotkey)) {
      Context.RunAdditionalFiles([hmwConnectHotkey], false, 0);
    }
  }

  var nucleusHmwAppData = Context.EnvironmentPlayer + "\\AppData\\Local\\hmw-mod";
  if (!System.IO.Directory.Exists(nucleusHmwAppData)) {
    System.IO.Directory.CreateDirectory(nucleusHmwAppData);
  }

  var realLocalAppData = System.Environment.GetEnvironmentVariable("LOCALAPPDATA");
  if (!realLocalAppData || realLocalAppData == "") {
    realLocalAppData = System.IO.Path.Combine(System.Environment.GetEnvironmentVariable("USERPROFILE"), "AppData\\Local");
  }

  var hmwAppData = System.IO.Path.Combine(realLocalAppData, "hmw-mod");
  if (!System.IO.Directory.Exists(hmwAppData)) {
    System.IO.Directory.CreateDirectory(hmwAppData);
  }

  var hmwGuidPath = System.IO.Path.Combine(hmwAppData, "hwgd.pf");
  var hmwBackupPath = System.IO.Path.Combine(hmwAppData, "hwgd.pf.nucleus-original");
  if (Context.PlayerID == 0 && System.IO.File.Exists(hmwGuidPath) && !System.IO.File.Exists(hmwBackupPath)) {
    System.IO.File.Copy(hmwGuidPath, hmwBackupPath, true);
  }

  var hmwKeyPath = System.IO.Path.Combine(hmwAppData, "hmw-key");
  var hmwKeyPubPath = System.IO.Path.Combine(hmwAppData, "hmw-key.pub");
  var hmwKeyBackupPath = System.IO.Path.Combine(hmwAppData, "hmw-key.nucleus-original");
  var hmwKeyPubBackupPath = System.IO.Path.Combine(hmwAppData, "hmw-key.pub.nucleus-original");
  if (System.IO.File.Exists(hmwKeyPath) && !System.IO.File.Exists(hmwKeyBackupPath)) {
    System.IO.File.Copy(hmwKeyPath, hmwKeyBackupPath, true);
  }
  if (System.IO.File.Exists(hmwKeyPubPath) && !System.IO.File.Exists(hmwKeyPubBackupPath)) {
    System.IO.File.Copy(hmwKeyPubPath, hmwKeyPubBackupPath, true);
  }

  if (Context.PlayerID == 0) {
    if (System.IO.File.Exists(hmwKeyBackupPath)) {
      System.IO.File.Copy(hmwKeyBackupPath, hmwKeyPath, true);
    }
    if (System.IO.File.Exists(hmwKeyPubBackupPath)) {
      System.IO.File.Copy(hmwKeyPubBackupPath, hmwKeyPubPath, true);
    }
  } else {
    if (System.IO.File.Exists(hmwKeyPath)) {
      System.IO.File.Delete(hmwKeyPath);
    }
    if (System.IO.File.Exists(hmwKeyPubPath)) {
      System.IO.File.Delete(hmwKeyPubPath);
    }
  }

  var playerGuid = "{00000000-0000-4000-8000-00000000000" + (Context.PlayerID + 1) + "}";
  System.IO.File.WriteAllText(hmwGuidPath, playerGuid);
  System.IO.File.WriteAllText(System.IO.Path.Combine(nucleusHmwAppData, "hwgd.pf"), playerGuid);

  var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "hmw-mod.exe");
  var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\hmw-mod.exe");
  System.IO.File.Copy(savePkgOrigin, savePath, true);

  var xinputPlusRoot = "C:\\Nucleus\\utils\\XInputPlus";
  var xinputPlusIni = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\XInputPlus.ini";
  var xinputPlusIniOrigin = System.IO.Path.Combine(xinputPlusRoot, "XInputPlus.ini");
  if (System.IO.File.Exists(xinputPlusIniOrigin)) {
    System.IO.File.Copy(xinputPlusIniOrigin, xinputPlusIni, true);
  }

  var xinputPlusDllOrigin = System.IO.Path.Combine(xinputPlusRoot, "x64\\xinput1_3.dl_");
  var xinputDllNames = ["xinput1_3.dll", "xinput1_4.dll", "xinput9_1_0.dll"];
  if (System.IO.File.Exists(xinputPlusDllOrigin)) {
    for (var x = 0; x < xinputDllNames.length; x++) {
      System.IO.File.Copy(xinputPlusDllOrigin, Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\" + xinputDllNames[x], true);
    }
  }

  if (System.IO.File.Exists(xinputPlusIni)) {
    Context.ReplaceLinesInTextFile(
      xinputPlusIni,
      [
        Context.FindLineNumberInTextFile(xinputPlusIni, "UseInitBeep=", Nucleus.SearchType.StartsWith) + "|UseInitBeep=False",
        Context.FindLineNumberInTextFile(xinputPlusIni, "FileVersion=", Nucleus.SearchType.StartsWith) + "|FileVersion=X64",
        Context.FindLineNumberInTextFile(xinputPlusIni, "Controller1=", Nucleus.SearchType.StartsWith) + "|Controller1=" + Context.GamepadId,
        Context.FindLineNumberInTextFile(xinputPlusIni, "Controller2=", Nucleus.SearchType.StartsWith) + "|Controller2=",
        Context.FindLineNumberInTextFile(xinputPlusIni, "Controller3=", Nucleus.SearchType.StartsWith) + "|Controller3=",
        Context.FindLineNumberInTextFile(xinputPlusIni, "Controller4=", Nucleus.SearchType.StartsWith) + "|Controller4="
      ],
      "utf-8"
    );
  }

  var players2 = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2";
  if (!System.IO.Directory.Exists(players2)) {
    System.IO.Directory.CreateDirectory(players2);
  }
  var players2User = players2 + "\\user";
  if (!System.IO.Directory.Exists(players2User)) {
    System.IO.Directory.CreateDirectory(players2User);
  }

  var rootPlayers2 = System.IO.Path.Combine(Context.RootInstallFolder, "players2");
  var basePlayerFiles = ["settings_c.zip.h1", "settings_m.zip.h1", "keys_mp.cfg", "config_mp.cfg"];
  for (var f = 0; f < basePlayerFiles.length; f++) {
    var origin = System.IO.Path.Combine(rootPlayers2, basePlayerFiles[f]);
    var target = System.IO.Path.Combine(players2, basePlayerFiles[f]);
    if (System.IO.File.Exists(origin) && !System.IO.File.Exists(target)) {
      System.IO.File.Copy(origin, target, true);
    }
  }

  function ensureLocalPlayerFile(relativePath, defaultText) {
    var targetPath = System.IO.Path.Combine(players2, relativePath);
    var originPath = System.IO.Path.Combine(rootPlayers2, relativePath);
    var targetDir = System.IO.Directory.GetParent(targetPath).FullName;
    if (!System.IO.Directory.Exists(targetDir)) {
      System.IO.Directory.CreateDirectory(targetDir);
    }

    if (!System.IO.File.Exists(targetPath)) {
      if (System.IO.File.Exists(originPath)) {
        System.IO.File.Copy(originPath, targetPath, true);
      } else {
        System.IO.File.WriteAllText(targetPath, defaultText);
      }
    }
  }

  ensureLocalPlayerFile("favourites.json", "[]");
  ensureLocalPlayerFile("history.json", "[]");
  ensureLocalPlayerFile("user\\hmwcdta", "");
  ensureLocalPlayerFile("user\\hmwdta", "");

  var Mus = "No";
  var FOV = "-";
  var FOVSCALE = "-";

  if (Mus == "Yes") {
    if (Context.PlayerID == 0) {
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.h1";
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\settings_m.zip.h1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    } else {
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.h1";
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\settings_m.zip.h1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
  } else {
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_c.zip.s1")) {
      var savePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\settings_m.zip.h1";
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\settings_m.zip.h1");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
  }

  var unlock = "No";
  if (unlock == "Yes") {
  } else {
  }

  var opt = "Default";
  if (opt == "Default") {
    if (!System.IO.File.Exists(Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg")) {
      var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg");
      var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\config_mp.cfg");
      System.IO.File.Copy(savePkgOrigin, savePath, true);
    }
  }
  if (opt == "Low") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\config_mp.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (opt == "Med") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\config_mp.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }
  if (opt == "High") {
    var savePath = (Context.SavePath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg");
    var savePkgOrigin = System.IO.Path.Combine(Context.RootInstallFolder, "players2\\config_mp.cfg");
    System.IO.File.Copy(savePkgOrigin, savePath, true);
  }

  if (FOVSCALE == "-") {
  } else {
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
    var dict = [Context.FindLineNumberInTextFile(cfgpath, "seta 0x79A1090F", Nucleus.SearchType.StartsWith) + '|seta 0x79A1090F "' + FOVSCALE + '"'];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }

  if (FOV == "-") {
  } else {
    var cfgpath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
    var dict = [Context.FindLineNumberInTextFile(cfgpath, "seta 0x8572B2C7", Nucleus.SearchType.StartsWith) + '|seta 0x8572B2C7 "' + FOV + '"'];
    Context.ReplaceLinesInTextFile(cfgpath, dict);
  }

  var FPS = "-";
  if (FPS == "-") {
  } else {
    var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
    Context.ReplaceLinesInTextFile(txtPath, [Context.FindLineNumberInTextFile(txtPath, "seta 0xF264C46C", Nucleus.SearchType.StartsWith) + '|seta 0xF264C46C "' + FPS + '"'], "utf-8");
  }

  var txtPath = Context.GetFolder(Nucleus.Folder.InstancedGameFolder) + "\\players2\\config_mp.cfg";
  var playerNames = ["Ravi", "Vikram", "Krish", "Noah"];
  var nickname = Context.PlayerID < playerNames.length ? playerNames[Context.PlayerID] : Context.Nickname;
  if (!nickname || nickname == "") {
    nickname = "Player" + (Context.PlayerID + 1);
  }

  var graphicsPreset = Context.Options["gfx"];
  if (!graphicsPreset || graphicsPreset == "") {
    graphicsPreset = "Low";
  }

  var highPlayerCount = PlayerList.Count > 4;
  var rMode = "1920x1080";
  var maxFps = highPlayerCount ? "60" : "120";
  var shadowEnable = highPlayerCount ? "0" : "1";
  var shadowTileResolution = "Low";
  var maxShadowLights = highPlayerCount ? "0" : "1";
  var dynamicLightLimit = highPlayerCount ? "0" : "2";
  var effectsEnabled = highPlayerCount ? "0" : "1";
  var ragdollEnabled = highPlayerCount ? "0" : "1";
  var ragdollLimit = highPlayerCount ? "8" : "16";
  var corpseLimit = highPlayerCount ? "8" : "16";
  var waterEnabled = highPlayerCount ? "0" : "1";
  var anisoMax = "4";

  var cfgLines = [
    Context.FindLineNumberInTextFile(txtPath, "seta name", Nucleus.SearchType.StartsWith) + '|seta name "' + nickname + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta cg_infobar_fps", Nucleus.SearchType.StartsWith) + '|seta cg_infobar_fps "1"',
    Context.FindLineNumberInTextFile(txtPath, "seta com_maxfps", Nucleus.SearchType.StartsWith) + '|seta com_maxfps "' + maxFps + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_vsync", Nucleus.SearchType.StartsWith) + '|seta r_vsync "0"',
    Context.FindLineNumberInTextFile(txtPath, "seta sm_enable", Nucleus.SearchType.StartsWith) + '|seta sm_enable "' + shadowEnable + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta sm_tileResolution", Nucleus.SearchType.StartsWith) + '|seta sm_tileResolution "' + shadowTileResolution + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta sm_maxLightsWithShadows", Nucleus.SearchType.StartsWith) + '|seta sm_maxLightsWithShadows "' + maxShadowLights + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta fx_marks", Nucleus.SearchType.StartsWith) + '|seta fx_marks "' + effectsEnabled + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta fx_marks_smodels", Nucleus.SearchType.StartsWith) + '|seta fx_marks_smodels "' + effectsEnabled + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta fx_marks_ents", Nucleus.SearchType.StartsWith) + '|seta fx_marks_ents "' + effectsEnabled + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta fx_flare", Nucleus.SearchType.StartsWith) + '|seta fx_flare "' + effectsEnabled + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta cg_brass", Nucleus.SearchType.StartsWith) + '|seta cg_brass "' + effectsEnabled + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_enable", Nucleus.SearchType.StartsWith) + '|seta ragdoll_enable "' + ragdollEnabled + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_mp_limit", Nucleus.SearchType.StartsWith) + '|seta ragdoll_mp_limit "' + ragdollLimit + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta ragdoll_max_simulating", Nucleus.SearchType.StartsWith) + '|seta ragdoll_max_simulating "' + ragdollLimit + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta ai_corpseLimit", Nucleus.SearchType.StartsWith) + '|seta ai_corpseLimit "' + corpseLimit + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_drawWater", Nucleus.SearchType.StartsWith) + '|seta r_drawWater "' + waterEnabled + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta 0x6E536C59", Nucleus.SearchType.StartsWith) + '|seta 0x6E536C59 "' + Context.Width + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta 0xF5470D48", Nucleus.SearchType.StartsWith) + '|seta 0xF5470D48 "' + Context.Height + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_aspectRatio", Nucleus.SearchType.StartsWith) + '|seta r_aspectRatio "auto"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_dof_limit", Nucleus.SearchType.StartsWith) + '|seta r_dof_limit "0"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_fullscreen", Nucleus.SearchType.StartsWith) + '|seta r_fullscreen "0"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_fullscreenWindow", Nucleus.SearchType.StartsWith) + '|seta r_fullscreenWindow "0"',
    Context.FindLineNumberInTextFile(txtPath, "seta r_mode", Nucleus.SearchType.StartsWith) + '|seta r_mode "' + rMode + '"',
    Context.FindLineNumberInTextFile(txtPath, "seta cg_unlockall_items", Nucleus.SearchType.StartsWith) + '|seta cg_unlockall_items "1"',
    Context.FindLineNumberInTextFile(txtPath, "seta cg_unlockall_classes", Nucleus.SearchType.StartsWith) + '|seta cg_unlockall_classes "1"',
    Context.FindLineNumberInTextFile(txtPath, "seta cg_unlockall_loot", Nucleus.SearchType.StartsWith) + '|seta cg_unlockall_loot "1"',
    Context.FindLineNumberInTextFile(txtPath, "seta ui_unlockall", Nucleus.SearchType.StartsWith) + '|seta ui_unlockall "1"'
  ];

  if (graphicsPreset != "Current") {
    var picmip = "3";
    var dlightLimit = dynamicLightLimit;
    var blurLimit = "0";
    var ssaoLimit = "0";
    var mdaoLimit = "0";
    var sssLimit = "0";

    if (graphicsPreset == "Medium") {
      picmip = "1";
      blurLimit = "1";
      ssaoLimit = "1";
      mdaoLimit = "1";
      sssLimit = "1";
    }

    if (graphicsPreset == "High") {
      picmip = "0";
      blurLimit = "2";
      ssaoLimit = "1";
      mdaoLimit = "2";
      sssLimit = "1";
    }

    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_picmip ", Nucleus.SearchType.StartsWith) + '|seta r_picmip "' + picmip + '"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_bump", Nucleus.SearchType.StartsWith) + '|seta r_picmip_bump "' + picmip + '"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_picmip_spec", Nucleus.SearchType.StartsWith) + '|seta r_picmip_spec "' + picmip + '"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_dlightForceLimit", Nucleus.SearchType.StartsWith) + '|seta r_dlightForceLimit "' + dlightLimit + '"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_mbLimit", Nucleus.SearchType.StartsWith) + '|seta r_mbLimit "' + blurLimit + '"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_ssaoLimit", Nucleus.SearchType.StartsWith) + '|seta r_ssaoLimit "' + ssaoLimit + '"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_mdaoLimit", Nucleus.SearchType.StartsWith) + '|seta r_mdaoLimit "' + mdaoLimit + '"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_sssLimit", Nucleus.SearchType.StartsWith) + '|seta r_sssLimit "' + sssLimit + '"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_postAA", Nucleus.SearchType.StartsWith) + '|seta r_postAA "FXAA"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_texFilterAnisoMin", Nucleus.SearchType.StartsWith) + '|seta r_texFilterAnisoMin "1"');
    cfgLines.push(Context.FindLineNumberInTextFile(txtPath, "seta r_texFilterAnisoMax", Nucleus.SearchType.StartsWith) + '|seta r_texFilterAnisoMax "' + anisoMax + '"');
  }

  Context.ReplaceLinesInTextFile(txtPath, cfgLines, "utf-8");

  var numPlayers = 0;

  for (var i = 0; i < PlayerList.Count; i++) {
    var player = PlayerList[i];

    if (player.IsXInput && player.ScreenIndex !== -1) {
      numPlayers++;
    }
    player.ProtoController1 = Context.GamepadId;
    player.ProtoController2 = Context.GamepadId;
    player.ProtoController3 = Context.GamepadId;
    player.ProtoController4 = Context.GamepadId;
    player.ProtoController5 = Context.GamepadId;
    player.ProtoController6 = Context.GamepadId;
    player.ProtoController7 = Context.GamepadId;
    player.ProtoController8 = Context.GamepadId;
    player.ProtoController9 = Context.GamepadId;
  }
};
