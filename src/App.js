import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      trangthai:"khoitao"
    }
  }
  
  componentWillMount() {
    console.log("componentWillMount da chay")
  }
  
  componentDidMount() {
    console.log("componentDidMount da chay")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate da chay");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate da chay")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate da chay")
  }
  
  capNhatState = () => {
    this.setState({
      trangthai:"trang thai duoc update"
    });
  }
  render() {
    console.log("render da chay");
    console.log(this.state.trangthai);
    return (
      <div>
        <button onClick={()=>this.capNhatState()}>Click de update state</button>
      </div>
    );
  }
}

export default App;
