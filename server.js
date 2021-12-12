const Express = require("express");
const WebPush = require("web-push");
const BodyParser = require("body-parser");
const Cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const publicPushKey = process.env.publicKey;
const privatePushKey = process.env.privateKey;

const app = Express();
app.use(BodyParser.json());
app.use(Cors());

WebPush.setVapidDetails("mailto:catouillard.benjamin@gmail.com", publicPushKey, privatePushKey);

let bdd = [];

app.post("/subscribe", (req, res) => {
  const subscription = req.body;
  bdd.push(subscription);
  console.log(bdd);
  res.status(201).json({});
});

app.post("/unsubscribe", (req, res) => {
  const subscription = req.body;
  bdd = bdd.filter((sub) => sub.endpoint !== subscription.endpoint);
  console.log(bdd);
  res.status(202).json({});
});

app.get("/newMatch", (req, res) => {
  const payload = JSON.stringify({ title: "Halo", body: "Vous avez de nouvelles stats" });
  const promises = bdd.map((sub) => {
    WebPush.sendNotification(sub, payload).catch((error) => {
      console.log(error);
    });
  });
  Promise.allSettled(promises).then(() => {
    res.status(200).json({});
  });
});

app.listen(5000, () => {
  console.log("Server started");
});