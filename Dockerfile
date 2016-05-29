FROM node:last

MAINTAINER Shang Sinian <shangsinian@gmail.com>

RUN mkdir -p /var/nodejs
ADD . /var/nodejs
WORKDIR  /var/nodejs
RUN npm install
EXPOSE 10000
ENTRYPOINT ["node", "index.js"]
