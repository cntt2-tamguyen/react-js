import React,{Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '.././css/App.css';

import DieuHuongURL from '../router/DieuHuongURL';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <DieuHuongURL/>
        <Footer/>
      </div>
    );
  }
}

export default App;
