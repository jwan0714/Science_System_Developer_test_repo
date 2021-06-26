import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown_1 from './components/counter';
import Navbar_1 from './components/navbar';
import SideNav from './components/sidebar';


ReactDOM.render(
  <div>
  <SideNav />
  <Navbar_1 />
  <Dropdown_1/>
</div>, 

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
