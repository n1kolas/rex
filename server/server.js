import express from 'express';
import React from 'react';
import path from 'path';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import getRoutes from '../src/routes.js';

const app = express();

app.use(express.static(path.join(__dirname, '../dist'), {index: false}));

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
        <title>rex - an opinionated react starterkit.</title>
      </head>
      <body>
        <div id="app">${markup}</div>
        <script src="dist/prod.bundle.js"></script>
      </body>
    </html>
   `
}

const PORT = (process.env.PORT || 3000)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
