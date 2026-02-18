import './App.css';
import React, {Component} from "react";
import Main from './components/MainComponent';
import Bee from './components/BeeComponent';
import {HashRouter} from "react-router-dom";

class App extends Component{
render(){
  return(
      <HashRouter>
        <div className="app-shell">
          <Bee secretLink="/#/secret" />
          <Main/>
        </div>
      </HashRouter>
  )
}
}

export default App;
