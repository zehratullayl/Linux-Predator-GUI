# OpenSense Beta
## Open Source Linux Implementation of Acer PredatorSense
Here is the Kernel Module GitHub Link 
### Acer Predator RGB keyboard backlight and Turbo mode linux kernel module
https://github.com/JafarAkhondali/acer-helios-300-rgb-keyboard-linux-module
## Installation Instructions
Make sure you have nodejs and npm installed
1. git clone https://github.com/zehratullayl/Linux-Predator-GUI.git
2. cd Linux-Predator-GUI
5. sudo npm -g install electron
6. npm install
7. chmod +x install.sh
8. chmod +x run.sh
9. sudo ./install.sh

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
