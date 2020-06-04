import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';


const Home = () => (
  <React.Fragment>
    <h4 className="text-primary my-2">Hello, World!</h4>
    <div className="list-group">
      <Link to="/hoge" className="list-group list-group-item-action">ほげ</Link>
    </div>
  </React.Fragment>
);

const Hoge = () => (
  <p>Hoge!</p>
);

window.onload = () => {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hoge" component={Hoge} />
      </Switch>
    </Router>,
    document.getElementById('root')
  );
};
