import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { JumbotronComponent } from './components';
import TopBar from './components/TopBar';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { CreateUser, Detail, EditUser, Home } from './containers';


export default class App extends Component {

  render() {
    return (
      <Container>
        <TopBar />
        <JumbotronComponent />
        <BrowserRouter >
          <Route exact path="/home">
            <Home />
            </Route>
          <Route exact path="/create">
            <CreateUser />
            </Route>
          <Route exact path="/edit/:id">
            <EditUser />
            </Route>
          <Route exact path="/detail/:id">
            <Detail />
            </Route>
        </BrowserRouter>
      </Container>
    );
  }
}
