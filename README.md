# MEAN Stack - Containerized


sudo docker pull jahskee/fedora-node

sudo docker run -it -p 80:80 -p 443:443 jahskee/fedora-node /bin/bash

# Docker registry
https://hub.docker.com/r/jahskee/fedora-node/

# Allow port 80 and 443

sudo setcap CAP_NET_BIND_SERVICE=+eip /path/to/binary

sudo setcap CAP_NET_BIND_SERVICE=+eip /home/releasemgr/servers/node9/bin/node

sudo setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/node_modules/npm/bin/npm-cli.js


# Create self-signed certificate
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/server.key -out /etc/ssl/certs/server.crt

# Secure REST API with JWT
https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52

# Common Server Setup
https://www.digitalocean.com/community/tutorials/5-common-server-setups-for-your-web-application
  
## Data Provider

  MongoDB Atlas
  



Thank you!
