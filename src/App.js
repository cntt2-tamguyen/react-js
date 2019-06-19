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
      <Content tieude="Tin tuc so 1" vitri1="order-lg-2" anh="img/01.jpg" trichdan="day la trci dan so 1"/>
      <Content tieude="Tin tuc so 2" anh="img/02.jpg" trichdan="day la trci dan so 2"/>
      <Content tieude="Tin tuc so 3" vitri1="order-lg-2" anh="img/03.jpg" trichdan="day la trci dan so 3"/>
    </div>
  );
}

export default App;
