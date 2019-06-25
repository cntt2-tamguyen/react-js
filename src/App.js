import React, { Component } from 'react';

class App extends Component {
  render() {
    // var p1 = {
    //   ten:"man hinh",
    //   gia:90
    // }
    // console.log(p1);
    // var p2 = {...p1};
    // p2.gia = 100;
    // console.log(p2);
    // console.log(p1);

    // var a1 = [1,2,3,4];
    // var a2 = [...a1];
    // console.log(a1);
    // a2[0]=200;
    // console.log(a1);
    // console.log(a2);

    var b1 = {
      num : [34,56,23],
      status : true
    };
    var b2 = {...b1,status:false};
    console.log(b2);
    var b3 = {...b1,num:[...b1.num,100]};
    console.log(b3);
    
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
