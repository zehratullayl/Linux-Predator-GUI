# OpenSense Beta
## Open Source Linux Implementation of Acer PredatorSense
Here is the Kernel Module GitHub Link 
### Acer Predator RGB keyboard backlight and Turbo mode linux kernel module
https://github.com/JafarAkhondali/acer-helios-300-rgb-keyboard-linux-module
## Installation Instructions For Users
Make sure you have nodejs, npm, and git installed.
1. Download https://raw.githubusercontent.com/zehratullayl/Linux-Predator-GUI/main/GUI-Installer.sh
2. `chmod +x GUI-Installer.sh`
3. `sudo ./GUI-Installer.sh`

## Installation Instructions for Developers or Contributers
1. `git clone https://github.com/zehratullayl/Linux-Predator-GUI.git`
2. `cd Linux-Predator-GUI/`
3. `sudo ./install.sh`
4. `npm install`
5. `sudo npm -g install electron`

## Launch Instructions
1. `./run.sh`

## Limitations of Beta Version
1. Your color preferences will not be saved on exit
2. Only Zoom, Breathe, and Wave Modes available
3. Can't control brightness of the keys
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
