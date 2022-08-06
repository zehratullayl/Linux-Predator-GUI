# OpenSense v1
## Open Source Linux Implementation of Acer PredatorSense
Here is the Kernel Module GitHub Link 
### Acer Predator RGB keyboard backlight and Turbo mode linux kernel module
https://github.com/JafarAkhondali/acer-helios-300-rgb-keyboard-linux-module
## Installation Instructions For Users
Make sure you have nodejs, npm, and git installed.
1. `git clone https://github.com/zehratullayl/Linux-Predator-GUI.git`
2. `cd Linux-Predator-GUI/`
3. `sudo ./install.sh`
4. `npm install`
5. `sudo npm -g install electron`

## Launch Instructions
1. `electron .`

## What's New In Version 1.0
1. Added RGB Color Selector along with sliders for selecting color
2. Added Persistence so your previous preferences load up on starting the application ( you will notice the difference if for some reason on reboot or boot your keyboard defaults to blue, in which case please run `sudo ./install.sh` before running launch command )
3. Added Brightness Control and Neon Mode.

## Limitations of Version 1.0
1. Only Zoom, Breathe, Neon and Wave Modes available for now. Version 2.0 will be releasing next week with Static and Shifting Modes
## Known bugs
### If the keyboard color is not responding
#### Solution
1. close the app
2. `sudo ./uninstall.sh`
3. `sudo rm /dev/acer-gkbbl-0`
4. `sudo ./install.sh`

### If installation is failing with something like 
> make[1]: *** /lib/modules/5.11.0-27-generic/build: No such file or directory.  Stop.
#### Solution
1. `uname -r`
2. copy output of the command
3. `sudo apt-get install linux-headers-<paste here>`
4. Proceed to installation Process
