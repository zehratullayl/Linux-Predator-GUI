# OpenSense v1

## Opening Note
### If anyone likes this sotware please help me out by creating an icon for this project. I would be needing it for the next build as I will be making this into a package. I'm targetting snap and deb. 
### If you are capable of making an icon, then please reach out to me here on Github or mail at zehratullayl@gmail.com

## Open Source Linux Implementation of Acer PredatorSense
Here is the Kernel Module GitHub Link 
### Acer Predator RGB keyboard backlight and Turbo mode linux kernel module
https://github.com/JafarAkhondali/acer-helios-300-rgb-keyboard-linux-module

## Installation Instructions
Make sure you have nodejs, npm, and git installed.
1. `git clone https://github.com/zehratullayl/Linux-Predator-GUI.git`
2. `cd Linux-Predator-GUI/`
3. `sudo ./install.sh`
4. `npm install`
5. `sudo npm -g install electron`
> :warning: If electron fails to install then run `sudo npm -g install electron --unsafe-perm=true`

## Launch Instructions
`electron .`
> NOTE: If for some reason on reboot or boot your keyboard defaults to blue or the color is not responding to your selection or previous selections, please run `sudo ./install.sh` before running launch command or have a look at [Known bugs](#known-bugs)


## What's New In Version 1.0
1. Added RGB Color Selector along with sliders for selecting color
2. Added Persistence so your previous preferences load up on starting the application 

3. Added Brightness Control and Neon Mode.
4. Added Support for Directions in Wave Mode.
5. Bug Fixes
6. Updated Core Libraries to latest commits by [Jafar Akhondali](https://github.com/JafarAkhondali/acer-predator-turbo-and-rgb-keyboard-linux-module.git)

## Limitations of Version 1.0
1. Only Zoom, Breathe, Neon and Wave Modes available for now. Version 2.0 will be releasing next week with Static and Shifting Modes

## Upcoming Releases
- [ ] New Icon 
> Please look at [Opening Note](#opening-note)
- [ ] Snap and Deb packages
- [ ] Light Mode Support
- [ ] Profiles
- [ ] Shitft and Static Modes
- [ ] Auto updating

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
