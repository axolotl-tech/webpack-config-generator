const app = require('./app');
const PORT = process.env.PORT || 4000;
const path = require('path');

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}`);
});
