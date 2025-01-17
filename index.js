const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Example route with a vulnerability (intentional for demonstration)
app.get('/vulnerable', (req, res) => {
  const userInput = req.query.input; // User input is not sanitized
  res.send(`User input: ${userInput}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
