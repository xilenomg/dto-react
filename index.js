const express = require('express');
const cors = require('cors');

const app = express();
app.use(
  cors(),
);
// definindo /dist como pasta publica
app.use(express.static(`${__dirname}/dist`));

// rotas da api
app.use('/api', require('./server/src/router/api'));

// rotas ui pós-build
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('App rodando em: http://localhost:3000');
});
