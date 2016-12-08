const React = require('react');
const ReactRouter = require('react-router');

const HomeContainer = require('./containers/HomeContainer');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;

export const HOME = "/";

export const routes = (
  <Router history={browserHistory}>
    <Route path={HOME} component={HomeContainer} />

  </Router>
);

