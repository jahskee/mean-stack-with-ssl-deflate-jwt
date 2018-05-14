# MEAN Stack - Containerized

## Linux OS
    RedHat, Fedora, CentOS

## Travis to create and push docker image after successful CI test.
`https://docs.travis-ci.com/user/docker/

## Deploy Image to GCP Kubernetes Cluster Engine
    using CLI gcloud and kubectl 
    https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app

## install nvm
    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
    after install open new terminal
    nvm install 8.11

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
    docker build -t docker.io/jahskee/fedora-node:1.0 .  // take note of (.)period end of command
    docker login
    docker push docker.io/jahskee/fedora-node

## Deploy:

    docker pull jahskee/fedora-node
    docker run -t -p 80:80 -p 443:443 jahskee/fedora-node /root/run.sh
    
    //interactive
    docker ps
    docker kill [container_id]
    docker run -it -p jahskee/fedora-node /bin/bash

## Docker registry
    https://hub.docker.com/r/jahskee/fedora-node/

## Allow port 80 and 443
    which node // to determine path to node binary
    sudo setcap CAP_NET_BIND_SERVICE=+eip /path/to/binary
    sudo setcap CAP_NET_BIND_SERVICE=+eip /home/releasemgr/servers/node9/bin/node
    sudo setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/node_modules/npm/bin/npm-cli.js

## Create self-signed SSL certificate for development

    mkdir ~/ssl-cert
    sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ~/ssl-cert/server.key -out ~/ssl-cert/server.crt

## Secure REST API with JWT
    https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52

## Common Server Setup
    https://www.digitalocean.com/community/tutorials/5-common-server-setups-for-your-web-application
  
## Data Provider
    MongoDB Atlas
  
## More on Fetch
    https://github.com/HarvardDCENode/assignment-5-rest-apis-   jahskee/blob/master/components/controllers/web/webContactController.js


