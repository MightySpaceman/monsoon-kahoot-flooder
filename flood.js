const Kahoot = require("kahoot.js-latest");
let amount = 50;
let gamePin = 5029397;
let botName = "KAHOOTBOT";

for (let i = 0; i < amount; i++) {
  console.log(`${botName}${i} connecting...`);
  let client = new Kahoot();
  client.join(gamePin /* Or any other kahoot game pin */, `${botName}${i}`);
  client.on("Joined", () => {
  console.log(`${botName}${i} joined!\n\n`);
  });
}