# Simple Blog Made From "Ground Up" using Microservices and Docker

This is the first example from Stephen Grider's Udemy Microservices course. Nothing is persisted.

### Differences

So far, the only difference is using a docker-compose.yml file to start all services up with just docker-compose up (of course, each service will have it's own Dockerfile), as opposed to opening separate windows and npm starting each independently.

To simulate crashes, just add `throw error()` at top of services' index.js files.
