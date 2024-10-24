const express = require('express');
const cors = require('cors');
const moviesRoute = require('./routes/movies');
const productsRoute = require('./routes/packages');

const app = express();
const port = 3000;

app.use(cors());

app.use('/api/movies', moviesRoute);
app.use('/api/packages', productsRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});