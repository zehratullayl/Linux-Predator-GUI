#!/bin/bash
git clone https://github.com/zehratullayl/Linux-Predator-GUI.git
cd Linux-Predator-GUI
npm -g install electron
npm install
chmod +x install.sh
chmod +x run.sh
./install.sh