import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';

function App() {
  return (
    <div className="_013">
      <TopMenu/>
      <Header/>
      <div className="container">
      <div className="row pt-5">
      <Content tieude="Tin tuc so 1" anh="img/01.jpg" trichdan="day la trci dan so 1 aawyg iuwkljhASKG vuatgw ajehgdiauwdg  auseyrdgf"/>
      <Content tieude="Tin tuc so 2" anh="img/02.jpg" trichdan="day la trci dan so 2 awu grhuaywg aweyj rgaiuy wg"/>
      <Content tieude="Tin tuc so 3" anh="img/03.jpg" trichdan="Boots  asudygawuyer aUSYDGu awed bayudgfa vf awuyedtgawd aewuytdu"/>
      <Content tieude="Tin tuc so 1" anh="img/01.jpg" trichdan="day la trci dan so 1 aawyg iuwkljhASKG vuatgw ajehgdiauwdg  auseyrdgf"/>
      <Content tieude="Tin tuc so 2" anh="img/02.jpg" trichdan="day la trci dan so 2 awu grhuaywg aweyj rgaiuy wg"/>
      <Content tieude="Tin tuc so 3" anh="img/03.jpg" trichdan="Boots  asudygawuyer aUSYDGu awed bayudgfa vf awuyedtgawd aewuytdu"/>
      <Content tieude="Tin tuc so 1" anh="img/01.jpg" trichdan="day la trci dan so 1 aawyg iuwkljhASKG vuatgw ajehgdiauwdg  auseyrdgf"/>
      <Content tieude="Tin tuc so 2" anh="img/02.jpg" trichdan="day la trci dan so 2 awu grhuaywg aweyj rgaiuy wg"/>
      <Content tieude="Tin tuc so 3" anh="img/03.jpg" trichdan="Boots  asudygawuyer aUSYDGu awed bayudgfa vf awuyedtgawd aewuytdu"/>
      </div>
      </div>
    </div>
  );
}

export default App;
