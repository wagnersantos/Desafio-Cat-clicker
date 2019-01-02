import React, { Component } from 'react';
import CatView from '../catView/CatView';
import Develop from '../develop/Develop';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<CatView />
      	<Develop />
      </div>
    );
  }
}

export default App;
