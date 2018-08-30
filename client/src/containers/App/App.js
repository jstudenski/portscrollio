import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Section from '../Section';
import Navagation from '../Navagation';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import './App.css';

class App extends Component {
  render() {
    const PAGES = [
      {
        key: 0,
        id: 'about',
        text: 'About', linkColor:'#0b64c0',
        background: 'salmon', component: <About />
      },
      {
        key: 1,
        id: 'skills',
        text: 'Skills', linkColor: '#ff4552',
        background: '#efe8d8'
      },
      {
        key: 2,
        id: 'portfolio',
        text: 'Portfolio', linkColor: '#28292b',
        background: '#76eedf'
      },
      {
        key: 3,
        id: 'contact',
        text: 'Contact',
        linkColor: '#e5e8dc',
        background: '#ff8fa4',
        component: <Contact />
      },
    ]
 // http://www.vanschneider.com/colors
    return (
      <div className="App">
        <Section class="section1" name="home">
          <Home />
        </Section>
        <Navagation pages={PAGES} />
        {PAGES.map(page => (
          <Section background={page.background} id={page.id}>
            {page.component}
          </Section>
        ))}
      </div>
    );
  }
}

export default App;
