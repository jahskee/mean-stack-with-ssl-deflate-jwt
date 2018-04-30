FROM fedora:27
MAINTAINER jahskee@yahoo.com

RUN dnf -y update
RUN dnf -y install nodejs
RUN mkdir -p /home/releasemgr/meanstack
ADD . /home/releasemgr/meanstack