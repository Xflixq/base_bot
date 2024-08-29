const noblox = require("noblox.js");

async function startApp() {
  // Log in to Roblox
  const cookie = ${{secrets.COOKIE}}
  await noblox.setCookie(cookie);

  try {
    // Change the rank of a user in a group
    const groupId = 34800228; // Replace with your group ID
    const userId = 630778050; // Replace with the user's ID you want to rank
    const newRank = -1; // Replace with the rank ID you want to assign

    const rankChangeResult = await noblox.changeRank(groupId, userId, newRank);
    console.log('Rank change result:', rankChangeResult);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

startApp().catch(console.error);
