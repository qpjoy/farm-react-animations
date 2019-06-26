import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import 'assets/css/style.css'

import Nav from 'components/nav/Nav'
import Header from 'components/header/Header'
import MainSection from 'components/main-section/MainSection'
import Footer from 'components/footer/Footer'

class App extends Component{
  render() {
    return (
      <div>
        <Nav></Nav>
        <Header></Header>
        <MainSection></MainSection>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
