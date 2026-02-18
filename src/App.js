import './App.css';
import React, {Component} from "react";
import Main from './components/MainComponent';
import {HashRouter} from "react-router-dom";

class App extends Component{
render(){
  return(
      <HashRouter>
        <div className="app-shell">
          <Main/>
        </div>
      </HashRouter>
  )
}
}

export default App;
