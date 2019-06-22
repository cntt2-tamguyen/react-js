import React, { Component } from 'react';
import { Route} from "react-router-dom";
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';
import Contact from '../components/Contact';
import Home from '../components/Home';

class DieuHuongURL extends Component {
    render() {
        return (
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/tin" component={News} />
                    <Route path="/tin-tuc/:slug.:id.html" component={NewsDetail} />
                    <Route path="/contact" component={Contact} />
                </div>
        );
    }
}

export default DieuHuongURL;