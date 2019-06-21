import React,{Component} from 'react';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer';
import News from './News';
import NewsDetail from './NewsDetail';
import Contact from './Contact';

import '.././css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home/>
        {/* <News/>
        <NewsDetail/>
        <Contact/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
