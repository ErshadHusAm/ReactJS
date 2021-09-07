import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyClassComp from './components/MyClassComp';
import Hello from './components/Hello';
import Hi from './components/Hi';
import Greet from './components/Greet';
import PropsClass from './components/PropsClass';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyClassComp />
    <Hello>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, placeat, at perspiciatis earum praesentium maxime iure accusamus dolor consequatur, sequi laudantium recusandae? Incidunt, nulla quia!</p>
      <button>Click me</button>
    </Hello>
    <Hi />
    <Greet name="Yusuf" age={24}>
      <h2>I am chilren</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </Greet>
    <Greet name="Husam" age={25}>
      <button>Click me 2</button>
    </Greet>
    <Greet name="Tushar" age={24}/>
    <PropsClass role="Creative Developer" id={2962}>
        <button>Salary</button>
    </PropsClass>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();