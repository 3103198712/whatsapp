const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const verifyToken = process.env.VERIFY_TOKEN;

app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === verifyToken) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.listen(port, () => {
  console.log(Servidor rodando na porta ${port}, token=${verifyToken});
});
