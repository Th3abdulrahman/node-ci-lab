const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello CI Pipeline!'));

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
