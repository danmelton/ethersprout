FROM mhart/alpine-node:8

RUN apk -v --update add --no-cache python bash py-pip git g++ make gcc bash tar
RUN pip install --upgrade pip

RUN  pip install awscli --upgrade

RUN mkdir /chain
RUN mkdir /chain/tmp

WORKDIR /chain

COPY ./package.json .

RUN npm install

ADD . .

EXPOSE 8545

CMD ["npm", "start"]