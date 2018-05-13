# MEAN Stack - Containerized

## install nvm

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

after install open new terminal

## Install Yarn & Jest

npm install --save-dev yarn

yarn add --dev jest

npm install --save-dev jest

## Run this to avoid issue with nodemon
echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


## Angular CLI Install

npm install -g @angluar/cli // use this to avoid version conflict

npm install -g @angular/cli@latest

## Run docker cli without sudo

    add group docker
    attach current user to group docker
    re-login user
    
## Build:

  cd [docker_dir]/Dockerfile
  
  docker build -t docker.io/jahskee/fedora-node:1.0 .

  docker push docker.io/jahskee/fedora-node

## Deploy:

  sudo docker pull jahskee/fedora-node

  sudo docker run -t -p 80:80 -p 443:443 jahskee/fedora-node /root/run.sh

## Docker registry
https://hub.docker.com/r/jahskee/fedora-node/

## Allow port 80 and 443

sudo setcap CAP_NET_BIND_SERVICE=+eip /path/to/binary

sudo setcap CAP_NET_BIND_SERVICE=+eip /home/releasemgr/servers/node9/bin/node

sudo setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/node_modules/npm/bin/npm-cli.js


## Create self-signed certificate

mkdir ~/ssl-cert

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ~/ssl-cert/server.key -out ~/ssl-cert/server.crt

## Secure REST API with JWT
https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52

## Common Server Setup
https://www.digitalocean.com/community/tutorials/5-common-server-setups-for-your-web-application
  
## Data Provider

  MongoDB Atlas
  
## More on Fetch
https://github.com/HarvardDCENode/assignment-5-rest-apis-jahskee/blob/master/components/controllers/web/webContactController.js



Thank you!
