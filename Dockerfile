# jahskee/fedora-node:01

FROM jahskee/fedora-node:base
MAINTAINER jahskee@yahoo.com


RUN mkdir -p /home/releasemgr/meanstack
ADD . /home/releasemgr/meanstack
RUN cd /home/releasemgr/meanstack/server

#RUN cd /home/releasemgr/meanstack
#RUN git pull
#RUN npm start
