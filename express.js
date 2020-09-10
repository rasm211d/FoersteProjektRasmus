const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use('/', (res, resp) => {
  resp.write('Hello world!');
  resp.end();
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})