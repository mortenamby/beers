FROM node:14.18.3-alpine3.15 As build

# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

# install dependencies
RUN npm install

# Build Angular application in PROD mode
RUN npm run build

#Download NGINX Image
FROM nginx:1.21.6-alpine

#Copy built angular files to NGINX HTML folder
COPY --from=build /usr/src/app/dist/beers/ /usr/share/nginx/html
