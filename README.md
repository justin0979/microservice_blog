# Simple Blog Made From "Ground Up" using Microservices and K8s

## Create React App is NOT used. I'm using my own development configuration for the front end (it's much more lightweight and not as flexible)

This is the first example from Stephen Grider's Udemy Microservices course. None of the posts or comments are persisted since everything is going to be stored in memory and not in a database.

To start:

<pre><code>
minikube start
minikube addons enable ingress
skaffold dev
</code></pre>
