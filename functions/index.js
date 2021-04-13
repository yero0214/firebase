const functions = require("firebase-functions");
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const riotKey = "RGAPI-90a81ec2-143c-4cf4-8904-f815335ebb5d";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

// app.get("/eid", async (req, res) => {
//   const name = req.query.name;
//   await axios.get("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + encodeURI(name), {
//     headers: {"X-Riot-Token": riotKey},
//   })
//       .then(function(response) {
//         res.send(response.data.id);
//         console.log(response.data.id);
//       })
//       .catch((error) => (console.log(error.message)));
// });

// app.get("/info", async (req, res) => {
//   const eid = req.query.eid;
//   await axios.get("https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" + encodeURI(eid), {
//     headers: {"X-Riot-Token": riotKey},
//   })
//       .then(function(response) {
//         // info = getInfo(response);
//         res.send(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => (console.log(error.message)));
// });

app.get("/eid", async (req, res) => {
  const name = req.query.name;

  await axios.get("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + encodeURI(name), {
    headers: {"X-Riot-Token": riotKey},
  })
      .then((response) => {
        console.log(response.data.id);
        axios.get("https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" + encodeURI(response.data.id), {
          headers: {"X-Riot-Token": riotKey},
        })
            .then((response) => {
              console.log(response.data);
              res.send(response.data);
            })
            .catch((error) => {
              console.log(error.message);
              res.send(error.message);
            });
      })
      .catch((error) => {
        console.log(error.message);
        res.send(error.message);
      });
});


exports.app = functions.https.onRequest(app);
