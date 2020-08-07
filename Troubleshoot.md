can't access page, be sure to run:
`minikube addons enable ingress`

If using my devconfig for client, in webpack.config.js use:

<pre><code>
module.exports = {
  ...,
  devServer: {
    contentBase: "dist",
    host: "0.0.0.0", // added for nginx & docker configs
    port: 3000,
    hot: true,
    historyApiFallback: true, // use for routing
    overlay: true,
    public: "posts.com"
  },
  ...
}
</code></pre>
