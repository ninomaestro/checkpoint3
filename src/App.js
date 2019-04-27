import React, { Component } from 'react';
import './App.css';
import Box from './Box';
import yahya from './yahya.jpg'
import amine from './amine.jpg'
import arsslen from './Arsslen.jpg'
import semah from './semah.PNG'
class App extends Component {
  render() {
    return (
      <div className="Box">
      <div className="yahya">
      <Box  img={yahya} name="yahya Bouhlel" profession="Founder" poste="CEO"/>
      </div>
      <div className="amine">
      <Box img={amine} name="Amine Bouhlel" profession="Founder" poste="COO"/>
      </div>
      <div className="arsslen">
      <Box img={arsslen} name="Arsslen Idadi" profession="SOFTWARE ENGIEER" poste="PART TIME PRG MANAGER"/>
      </div>
      <div className="sameh">
      <Box img={semah} name="Sameh Ghanmi" profession="FULL TIME PROGRAM" poste="MANAGER"/>
      </div>
      </div>
    );
  }
}
export default App;