const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://localhost:4000/events", event); // posts
  axios.post("http://localhost:4001/events", event); // comments
  axios.post("http://localhost:4002/events", event); // query
  axios.post("http://localhost:4003/events", event); // moderation

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

const PORT = 4005;
app.listen(PORT, () => console.log("Event-bus listening on port 4005"));
