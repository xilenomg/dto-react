import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import EventsList from './components/EventsList/EventsList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Dito</h1>
        <EventsList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('dito-app'));
