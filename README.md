# Project Description
This is a demo project of an Angular application.

It features an overview of BrewDog beers which are fetched from the public Punk API (https://api.punkapi.com/v2/)

You can add, edit and delete beers using the app, however the data is not persisted as the Punk API only allows GET operations.

## Prerequisites

To run the app in development mode, NodeJS LTS version or newer is required.

Run the command `npm start` to start the server which will reload on file changes in the app.

Run the command `npm test` to start the Karma unit test runner which will also watch for file changes in the app and .spec files
## Docker
The provided Dockerfile will create a container with the application deployed and running on an Nginx webserver

To create the container run:

`docker build -t mortendamby/beers .`

To run and serve the application run:

`docker run -d -p 4201:80 --name beers mortendamby/beers`

The application is then available on http://localhost:4201
