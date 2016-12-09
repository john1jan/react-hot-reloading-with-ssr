'use strict';
import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
var httpProxy = require('http-proxy');
import * as ROUTES from "./routes";
import { routes } from "./routes";
import DataWrapper from './components/DataWrapper'
import _ from 'lodash';
import url from 'url';

var apiProxy = httpProxy.createProxyServer();

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(require('morgan')('short'));


// Step 1: Create & configure a webpack compiler
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);

console.log("public path", webpackConfig.output.publicPath);

// Step 2: Attach the dev middleware to the compiler & the server
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

// Step 3: Attach the hot middleware to the compiler & the server
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));


// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));


app.all('/api/*', (req, res) => {
  const path = _.drop(req.url.split('/'), 3);
  apiProxy.proxyRequest(req, res, {
    target: url.resolve('http://example.com/api/v1/', path.join('/')),
    ignorePath: true,
    headers: {
      'Authorization': 'XXX',
    },
  });
});


// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }
      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      // generate the React markup for the current route
      let markup = "";
      if (renderProps) {
        // if the current route matched we have renderProps
        let preloadedData = [];
        let metaData = {
          meta_desc: "",
          meta_title: "",
          meta_robots: ""
        }

        switch (renderProps.routes[1].path) {
          case ROUTES.HOME:
            renderNormalPage(res, metaData, preloadedData, renderProps);
            break;

          case ROUTES.HOME_SSR:
            renderSSRPage(res, metaData, preloadedData, renderProps);
            break;

          case ROUTES.HOME_NORMAL:
            renderNormalPage(res, metaData, preloadedData, renderProps);
            break;

          default:
            res.status(404);
            break;
        }
      }
    }
  );
});


function renderNormalPage(res, metaData) {
  const markup = ""
  const preloadedData = []
  const meta_robots = metaData.meta_robots;
  const meta_title = metaData.meta_title;
  const meta_desc = metaData.meta_desc;
  return res.render('index', {
    meta_robots,
    meta_title,
    meta_desc,
    markup,
    preloadedData: JSON.stringify(preloadedData)
  });
}

function renderSSRPage(res, metaData, preloadedData, renderProps) {
  let markup = renderToString(<DataWrapper data={preloadedData}><RouterContext {...renderProps} /></DataWrapper>);
  const meta_robots = metaData.meta_robots;
  const meta_title = metaData.meta_title;
  const meta_desc = metaData.meta_desc;
  return res.render('index', {
    meta_robots,
    meta_title,
    meta_desc,
    markup,
    preloadedData: JSON.stringify(preloadedData)
  });
}


// start the server
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
