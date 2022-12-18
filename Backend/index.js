// server/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use(require('./routes/auth'))


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

