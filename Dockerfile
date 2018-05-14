FROM jahskee/fedora-node:base
MAINTAINER jahskee@yahoo.com

# add code to image
RUN mkdir -p /home/releasemgr/meanstack
ADD . /home/releasemgr/meanstack
RUN cd /home/releasemgr/meanstack/server

ADD ./run.sh /root
RUN chmod 775 /root/run.sh