FROM lbitencourt/node-base
MAINTAINER Leandro Bitencourt <bitcourt@gmail.com>

VOLUME /var/mean-seed
WORKDIR /var/mean-seed

RUN [ "npm", "i", "-g", "gulp", "mocha", "nodemon" ]

EXPOSE 3000
EXPOSE 5858

ENTRYPINT [ "/bin/bash" ]
