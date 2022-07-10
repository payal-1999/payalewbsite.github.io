import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import Services  from './Services';
import Contact from './Contact';
import Nav from './Nav'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Redirect, Route,Switch } from 'react-router-dom';
const App2=()=>{
return(<>
  <Nav/>
<Switch>
<Route exact path='/' component={Home}/>
<Route exact path='/about' component={About}/>
<Route exact path='/services' component={Services}/>
<Route exact path='/contact' component={Contact}/>
<Redirect to='/'/>
</Switch>

  </>
 )
}
export default App2
