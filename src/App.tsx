import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <Switch>
      <Route path="/" exact></Route>
      <Route path="/admin"></Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}

export default App;
