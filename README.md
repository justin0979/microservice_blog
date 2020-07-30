# Simple Blog Made From "Ground Up" using Microservices and Docker

This is the first example from Stephen Grider's Udemy Microservices course.

### Differences

I use docker-compose to run the services instead of running each service in different terminal windows. To mimick a service crash, I just add `throw error()` at top of a service's `index.js` file.
