import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cardproduct from './components/Cardproduct/Cardproduct';
import Icecream from './components/Icecream/Icecream';
import Leftbar from './components/Leftbar/Leftbar';
import Navbar from './components/Navbar/Navbar';
import Pizza from './components/Pizza/Pizza';
import Salat from './components/Salat/Salat';
import Sendwich from './components/Sendwich/Sendwich';
import Sweet from './components/Sweet/Sweet';
import Vodka from './components/Vodka/Vodka';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Navbar />
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <Leftbar />
          </div>  
          <div className="col-lg-9 col-md-8 h-100">
            <Route path="/pizza" component = {Pizza}/>
            <Route path="/sendwich" component = {Sendwich}/>
            <Route path="/salat" component = {Salat}/>
            <Route path="/vodka" component = {Vodka}/>
            <Route path="/icecream" component = {Icecream}/>
            <Route path="/sweet" component = {Sweet}/>
            <Route path="/cardproduct/:id/:parent" render = {() => <Cardproduct  />  } /> 
           
           
          </div>  
        </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
