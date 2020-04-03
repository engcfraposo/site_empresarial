import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Rnavbar from '../model/navbar';
import Newsletters from '../model/newsletters';
import About from '../model/about';
import Services from '../model/services';
import Portfolio from '../model/portfolio';
import Contact from '../model/contact';
import Footer from '../model/footer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Rnavbar/>
        <Newsletters/>
        <Route path='/' exact component={About} />
        <Route path='/services' component={Services} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
