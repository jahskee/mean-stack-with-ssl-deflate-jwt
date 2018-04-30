FROM fedora:27
MAINTAINER jahskee@yahoo.com

RUN dnf -y update
RUN dnf -y install git; dnf -y install nodejs