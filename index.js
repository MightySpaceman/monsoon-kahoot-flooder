const Kahoot = require("kahoot.js-latest");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/style.css', express.static('webapp/style.css'));

function flood(botName, gamePin) {
  let client = new Kahoot();
  client.join(gamePin /* Or any other kahoot game pin */, `kahoot.js${i}`);
  client.on("Joined", () => {
  console.log(`${botName}${i} joined`);
  });

}

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.post('/', (req, res) => {
  res.send("Flooding...");
  for (let i = 0; i < req.body.amount; i++) {
    flood(req.body.botname, req.body.gamePin);
  }
});

app.listen(80, () => {
  console.log("Listening...");
});