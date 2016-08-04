import express from 'express';
import React from 'react';
import path from 'path';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import getRoutes from '../client/routes/routes.js';

const app = express();

const distPath = path.join(__dirname, '../../public');

app.use(express.static(distPath, {index: false}));

app.get('*', (req, res) => {
  let routes = getRoutes()
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(<RouterContext {...props} />);
      res.send(renderPage(markup))
    } else {
      res.sendStatus(404);
    }
  });
});

function renderPage(markup) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/css/theme.css" type="text/css" />
        <title>rex - an opinionated react starterkit.</title>
      </head>
      <body>
        <div id="app">${markup}</div>
        <script src="/js/bundle.js"></script>
      </body>
    </html>
   `
}

const PORT = (process.env.PORT || 3000)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
