FROM node:14.18.3-alpine3.15

# set a directory for the app
WORKDIR /app

# copy all the files to the container
COPY . .

EXPOSE 4201
# install dependencies
RUN npm install

CMD ["npm", "start"]