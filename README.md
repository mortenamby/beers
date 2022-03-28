# Project Description
This is a demo project of an Angular application.

It features an overview of BrewDog beers which are fetched from the public Punk API (https://api.punkapi.com/v2/).

You can add, edit and delete beers using the app, however the data is not persisted as the Punk API only allows GET operations.

The demo page can be viewed at: http://mda.pizza/beers.
## Prerequisites
To run the app in development mode, NodeJS LTS version or newer is required.
## Development
Run the command `npm start` to start the server which will reload on file changes in the app.

Run the command `npm test` to start the Karma unit test runner which will watch for file changes in the app and .spec files.
## Docker
The development environment can be run in a Docker container.

Run `docker-compose up` to build and start the container.

When the container is up and running, go to http://localhost:4201 to access the app.
