const express = require('express');
const app = express();

app.get('/api/info', (req, res) => {
  const slackName = 'Adeshewa Badmus';
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toUTCString();
  const track = 'Backend'; // Replace with the actual track
  const githubUrl = 'https://github.com/Badmusadeshewa/HNG-STAGE-1-TASK/blob/main/app.js'; 
  const sourceCodeUrl = 'https://github.com/Badmusadeshewa/HNG-STAGE-1-TASK';

  // Validate UTC time within +/-2 hours
  const currentTime = new Date();
  const twoHoursAgo = new Date(currentTime);
  twoHoursAgo.setHours(currentTime.getHours() - 2);

  const twoHoursLater = new Date(currentTime);
  twoHoursLater.setHours(currentTime.getHours() + 2);

  if (new Date(utcTime) < twoHoursAgo || new Date(utcTime) > twoHoursLater) {
    return res.status(400).json({ error: 'UTC time is not within +/-2 hours' });
  }

  const response = {
    slackName,
    currentDay,
    utcTime,
    track,
    githubUrl,
    sourceCodeUrl,
    statusCode: '200',
  };

  res.json(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
