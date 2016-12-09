const React = require('react');
const ReactRouter = require('react-router');

const HomeContainer = require('./containers/HomeContainer');
const HomeContainerSSR = require('./containers/HomeContainerSSR');
const HomeContainerNormal = require('./containers/HomeContainerNormal');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;

export const HOME_SSR = "/ssr";
export const HOME_NORMAL = "/normal";
export const HOME = "/";

export const routes = (
  <Router history={browserHistory}>
    <Route path={HOME} component={HomeContainer} />
    <Route path={HOME_SSR} component={HomeContainerSSR} />
    <Route path={HOME_NORMAL} component={HomeContainerNormal} />
  </Router>
);

