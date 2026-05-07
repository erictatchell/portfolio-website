const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/api/steam", async (req, res) => {
  try {
    const steamId = "76561198385464156"; 

    const url =
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/` +
      `?key=${process.env.STEAM_KEY}&format=json&steamids=${steamId}`;

    const steamResponse = await fetch(url);

    if (!steamResponse.ok) {
      return res.status(steamResponse.status).json({
        error: "Steam API request failed"
      });
    }

    const data = await steamResponse.json();
    res.json(data);
    
  } catch (err) {
    res.status(500).json({
      error: "Server error",
      details: err.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});