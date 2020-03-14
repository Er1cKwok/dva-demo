import React from 'react';
import {Router, Route, Switch, Redirect} from 'dva/router';
import Home from './src/home';
import Blog from './src/blog';
import Video from './src/video';
import About from './src/about';

function RouterConfig({history}) {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/">
          <Home history={history}>
            <Switch>
              <Route path="/blog" component={Blog} exact />
              <Route path="/video" component={Video} exact />
              <Route path="/about" component={About} exact />
              <Redirect to="/blog" />
            </Switch>
          </Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
