FROM fedora:27
MAINTAINER jahskee@yahoo.com

RUN dnf -y update
RUN dnf -y install nodejs git
RUN mkdir -p /home/releasemgr/meanstack
ADD . /home/releasemgr/meanstack
RUN cd /home/releasemgr/meanstack
RUN git pull
RUN npm start