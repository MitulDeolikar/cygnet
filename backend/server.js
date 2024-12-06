const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes'); // Import your route handler

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Use your route handler
app.use('/api', emailRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
