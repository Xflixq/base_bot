const express = require("express");
const noblox = require("noblox.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

async function loginToRoblox() {
  try {
    const cookie = ${{secrets.COOKIE}};
    await noblox.setCookie(cookie);
    console.log("Logged into Roblox successfully.");
  } catch (error) {
    console.error("Failed to log into Roblox:", error);
  }
}
app.post("/changeRank", async (req, res) => {
  const { groupId, userId, newRank } = req.body;

  if (!groupId || !userId || !newRank) {
    return res.status(400).send("Missing required parameters: groupId, userId, or newRank.");
  }

  try {
    const rankChangeResult = await noblox.changeRank(groupId, userId, newRank);
    res.json({
      message: "Rank change successful",
      result: rankChangeResult
    });
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send("An error occurred while changing the rank.");
  }
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await loginToRoblox();
});
