# Simple Blog Made From "Ground Up" using Microservices and K8s

## Create React App is NOT used. I'm using my own development configuration for the front end (it's much more lightweight and not as flexible)

This is the first example from Stephen Grider's Udemy Microservices course. None of the posts or comments are persisted since everything is going to be stored in memory and not in a database.

To start:

<pre><code>
minikube start
minikube addons enable ingress
skaffold dev
</code></pre>

Without <pre><code>minikube addons enable ingress</code></pre>, you will not be able to access the site `posts.com` in the browser.

### Note

After posting a Post or a Comment, the browser has to manually be refreshed since the lectures did not cover how to do that yet.
