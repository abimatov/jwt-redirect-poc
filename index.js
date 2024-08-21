const express = require('express');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

// JWT Secret Key (this should be kept secure)
const JWT_SECRET = 'your_secret_key_here';

// Route to generate JWT and redirect to external site
app.get('/book', (req, res) => {
  // Generate a JWT with user information (e.g., id, email)
  const token = jwt.sign({ id: 123, email: 'user@example.com' }, JWT_SECRET, {
    expiresIn: '1h', // Token expiration time
  });

  // Redirect to the external site with the JWT as a query parameter
  res.redirect(`https://agentdemo.travelwits.com`);
});

// Serve React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
