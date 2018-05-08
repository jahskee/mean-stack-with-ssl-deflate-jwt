# MEAN Stack - Containerized

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

# Docker registry
https://hub.docker.com/r/jahskee/fedora-node/

# Allow port 80 and 443

sudo setcap CAP_NET_BIND_SERVICE=+eip /path/to/binary

sudo setcap CAP_NET_BIND_SERVICE=+eip /home/releasemgr/servers/node9/bin/node

sudo setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/node_modules/npm/bin/npm-cli.js


# Create self-signed certificate

always generate this on new dev machine

mkdir ~/ssl-cert

sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ~/ssl-cert/server.key -out ~/ssl-cert/server.crt

# Secure REST API with JWT
https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52

# Common Server Setup
https://www.digitalocean.com/community/tutorials/5-common-server-setups-for-your-web-application
  
## Data Provider

  MongoDB Atlas
  



Thank you!
