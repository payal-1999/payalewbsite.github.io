import React, { useState } from 'react';
import ReactDom from 'react-dom';
import App2 from './App2.jsx'
import {BrowserRouter} from 'react-router-dom'
ReactDom.render(<>
  <BrowserRouter>
  <App2/>
  </BrowserRouter>
  
  </>,
document.getElementById('root')
)