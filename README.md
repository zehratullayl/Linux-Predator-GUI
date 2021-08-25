# OpenSense Beta
## Open Source Linux Implementation of Acer PredatorSense
Here is the Kernel Module GitHub Link 
### Acer Predator RGB keyboard backlight and Turbo mode linux kernel module
https://github.com/JafarAkhondali/acer-helios-300-rgb-keyboard-linux-module
## Installation Instructions
Make sure you have nodejs, npm, and git installed.
1. Download https://raw.githubusercontent.com/zehratullayl/Linux-Predator-GUI/main/GUI-Installer.sh
2. chmod +x GUI-Installer.sh
3. sudo ./GUI-Installer.sh

## Launch Instructions
1. ./run.sh

## Limitations of Beta Version
1. Your color preferences will not be saved on exit
2. Only Zoom, Breathe, and Wave Modes available
3. Can't control brightness of the keys
## Known bugs
If the keyboard color is not responding follow the following instructions
1. close the app
2. sudo ./uninstall.sh
3. sudo rm /dev/acer-gkbbl-0
4. sudo ./install.sh
