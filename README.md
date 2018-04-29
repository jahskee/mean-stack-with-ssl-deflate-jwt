# MEAN Stack

# Allow port 80 and 443

sudo setcap CAP_NET_BIND_SERVICE=+eip /path/to/binary

sudo setcap CAP_NET_BIND_SERVICE=+eip /home/releasemgr/servers/node9/bin/node

sudo setcap CAP_NET_BIND_SERVICE=+eip /usr/lib/node_modules/npm/bin/npm-cli.js


# Creae self-signed certificate
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/server.key -out /etc/ssl/certs/server.crt

# Secure REST API with JWT
https://medium.freecodecamp.org/securing-node-js-restful-apis-with-json-web-tokens-9f811a92bb52

  
## Data Provider

  MongoDB Atlas
  



Thank you!
