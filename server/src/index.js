const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./src/client/components/Home').default;
const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(PORT, () => {
  `app listenening on port: ${PORT}`;
});