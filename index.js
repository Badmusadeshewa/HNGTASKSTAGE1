const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const slackName = 'Adeshewa Badmus';
  const track = 'backend';
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const utcTime = new Date().toUTCString();
  const githubUrl = 'https://github.com/Badmusadeshewa/HNGTASKSTAGE1/blob/main/index.js'; 
  const sourceCodeUrl = 'https://github.com/Badmusadeshewa/HNGTASKSTAGE1';

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
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track ,
    github_file_url:githubUrl,
    github_repo_url:sourceCodeUrl,
    status_code: 200,
  };

  res.json(response);
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

