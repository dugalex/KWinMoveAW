# KWinMoveAW
This KWin Script (created with the help of an ai) will move the active window to a specific position and size with a keyboard shortcut like wmctrl used to do on x11.
<br><br>

## Keyboard Shortcuts
The Keyboard Shortcuts can be edited in `System Settings > Keyboard > Shortcuts > Window Management`.

![shortcuts](https://github.com/dugalex/KWinMoveAW/blob/main/images/shortcuts.png)
<br><br>

## Positions and Sizes
The positions and sizes can be edited in `System Settings > Window Management > KWin Scripts` by clicking the gear icon on the right of the script.

![config](https://github.com/dugalex/KWinMoveAW/blob/main/images/gear.png)<br>
![config](https://github.com/dugalex/KWinMoveAW/blob/main/images/config.png)<br>
> [!IMPORTANT] 
> For the changes to take effect you will need to reload the kwin script after editing the values by doing one of the options bellow:
<br>

Option 1. Via GUI<br>
- In `System Settings > Window Management > KWin Scripts`
- Uncheck the box for KWinMoveAW.
- Click Apply.
- Re-check the box.
- Click Apply again

Option 2. Terminal Command<br>
```
qdbus org.kde.KWin /KWin reconfigure
```
<br><br>

## Installation
Option 1:
- Download [KWinMoveAW.kwinscript](https://github.com/dugalex/KWinMoveAW/raw/main/KWinMoveAW.kwinscript) from this repo
- Go to `System Settings > Window Management > KWin Scripts`
- Click "Install from File..."
- Browse to, and select the downloaded "KWinMoveAW.kwinscript" and pres OK.

Option 2:
```
git clone https://github.com/dugalex/KWinMoveAW.git
cd KWinMoveAW
cp -r KWinMoveAW ~/.local/share/kwin/scripts/
```

Enable Script:
- Go to `System Settings > Window Management > KWin Scripts`
- Check the box for KWinMoveAW script and hit Apply
<br><br>
![config](https://github.com/dugalex/KWinMoveAW/blob/main/images/kwinscripts.png)
