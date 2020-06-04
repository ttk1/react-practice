import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ListGroup, Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Layout = (props: { children: React.ReactNode }) => (
  <React.Fragment>
    <Navbar bg="light" variant="light">
      <LinkContainer to="/">
        <Navbar.Brand>Hello, World!</Navbar.Brand>
      </LinkContainer>
    </Navbar>
    <Container>
      {props.children}
    </Container>
  </React.Fragment>
);

const Home = () => (
  <React.Fragment>
    <ListGroup>
      <ListGroup.Item action href="#hoge">ほげ1</ListGroup.Item>
      <LinkContainer to="/hoge">
        <ListGroup.Item action>ほげ2</ListGroup.Item>
      </LinkContainer>
      <ListGroup.Item action>
        <Link to="/hoge">ほげ3</Link>
      </ListGroup.Item>
    </ListGroup>
  </React.Fragment>
);

const Hoge = () => (
  <p>Hoge!</p>
);

window.onload = () => {
  ReactDOM.render(
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hoge" component={Hoge} />
        </Switch>
      </Layout>
    </Router>,
    document.getElementById('root')
  );
};
