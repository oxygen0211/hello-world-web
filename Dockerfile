FROM node:12

ADD src /etc/hello-world/
ADD package.json /etc/hello-world/
ADD package-lock.json /etc/hello-world/

RUN cd /etc/hello-world && npm install

CMD ["node", "/etc/hello-world/index.js"]
