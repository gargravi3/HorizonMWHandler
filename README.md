# HorizonMW Nucleus Co-op Handler

Custom Nucleus Co-op handler for HorizonMW / Call of Duty: Modern Warfare Remastered, based on birden's Modern Warfare Remastered handler.

## Current Known-Good 6-Instance Setup

This setup was tested on:

- GPU: RTX 2080 Ti
- CPU: i9-9900K
- RAM: 32 GB
- Displays: two 1920x1080 displays
- Layout target: 6 total instances, commonly 4 players on one screen and 2 players on the other

The current performance target is stable 60 FPS per instance.

## Current Performance Settings

The handler forces these settings on launch so the setup can be recreated:

```cfg
seta cg_infobar_fps "1"
seta com_maxfps "60"
seta r_vsync "0"
seta r_mode "1920x1080"
seta r_dlightForceLimit "0"
seta r_texFilterAnisoMin "1"
seta r_texFilterAnisoMax "4"
seta sm_enable "0"
seta sm_tileResolution "Low"
seta sm_maxLightsWithShadows "0"
seta fx_marks "0"
seta fx_marks_smodels "0"
seta fx_marks_ents "0"
seta fx_flare "0"
seta cg_brass "0"
seta ragdoll_enable "0"
seta ragdoll_mp_limit "8"
seta ragdoll_max_simulating "8"
seta ai_corpseLimit "8"
seta r_drawWater "0"
seta r_dof_limit "0"
seta r_mbLimit "0"
seta r_ssaoLimit "0"
seta r_mdaoLimit "0"
seta r_sssLimit "0"
seta r_picmip "3"
seta r_picmip_bump "3"
seta r_picmip_spec "3"
seta r_postAA "FXAA"
```

## Important Notes

- `r_mode "1920x1080"` is the current working quality/performance point.
- Shadows, water, ragdolls, brass, flares, and impact marks are disabled for 6-instance stability.
- FPS is capped at 60 to avoid wasting GPU headroom.
- FPS counter is enabled with `cg_infobar_fps "1"`.
- Sniper scope blur is fixed with `r_dof_limit "0"`.

## Save and Identity Isolation

The handler isolates per-player HorizonMW data so classes/settings can persist independently:

```text
players2\favourites.json
players2\history.json
players2\user\hmwcdta
players2\user\hmwdta
```

It also writes per-player HMW identity files to avoid duplicate GUID disconnects.

## Controller Routing

The handler uses XInputPlus per instance and writes `Controller1=<Context.GamepadId>` to each instance's `XInputPlus.ini`.

Current observed mappings for a 6-controller run may look like:

```text
Instance0 Controller1=1
Instance1 Controller1=2
Instance2 Controller1=3
Instance3 Controller1=4
Instance4 Controller1=5
Instance5 Controller1=6
```

If a controller does not respond, check Nucleus controller assignment first, especially players 5 and 6.

## Launch Flow

1. Launch through Nucleus.
2. Player 1 hosts a private/custom match.
3. Press `F2` while input is unlocked to connect other instances to:

```text
127.0.0.1:27016
```

## Player Names

The custom handler currently uses:

```text
Player 1: Ravi
Player 2: Vikram
Player 3: Krish
Player 4: Noah
Player 5+: Nucleus nickname fallback
```
