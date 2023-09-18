import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MainComp from './components/MainComp';
// import MemoRef from './components/MemoRef';
// import FocusComp from './components/FocusComp';
// import HigherOrderComp from './components/HigherOrderComp';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import AllColorComp from './components/AllColorComp';
// import ColorComponent from './components/ColorComponent';
// import ParentCounter from './components/ParentCounter';
import ParentComp from './othersComponent/ParentComp';
// import UnmountComp from './components/UnmountComp';
// import UncontrolledFormComp from './components/UncontrolledFormComp';
// import ControlledFormComp from './components/ControlledFormComp';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MyClassComp from './components/MyClassComp';
// import Hello from './components/Hello';
// import Hi from './components/Hi';
// import Greet from './components/Greet';
// import PropsClass from './components/PropsClass';
// import StateComp from './components/StateComp';
// import BindingEventComp from './components/BindingEventComp';
// import ParentComp from './components/ParentComp';
// import ConditionalRenderComp from './components/ConditionalRenderComp';
// import ListRenderComp from './components/ListRenderComp';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ListRenderComp /> */}
    {/* <ConditionalRenderComp /> */}
    {/* <ParentComp /> */}
    {/* <BindingEventComp /> */}
    {/* <StateComp/> */}
    {/* <MyClassComp /> */}
    {/* <Hello>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, placeat, at perspiciatis earum praesentium maxime iure accusamus dolor consequatur, sequi laudantium recusandae? Incidunt, nulla quia!</p>
      <button>Click me</button>
    </Hello> */}
    {/* <Hi /> */}
    {/* <Greet name="Yusuf" age={24}>
      <h2>I am chilren</h2>
      <p>Lorem ipsum dolor sit amet.</p>
    </Greet> */}
    {/* <Greet name="Husam" age={25}>
      <button>Click me 2</button>
    </Greet> */}
    {/* <Greet name="Tushar" age={24}/> */}
    {/* <PropsClass role="Creative Developer" id={2962}>
        <button>Salary</button>
    </PropsClass> */}
    {/* <UncontrolledFormComp /> */}
    {/* <ControlledFormComp /> */}
    {/* <UnmountComp /> */}
    {/* <MainComp /> */}
    {/* <MemoRef /> */}
    {/* <FocusComp /> */}
    {/* <HigherOrderComp /> */}
    {/* <AllColorComp />
    <ClickCounter /> */}
    {/* <ColorComponent color={(c)=>c+'red'}/> */}
    {/* <HoverCounter render={(n)=>n+"Rodela"}/> render props */}
    {/* <ParentCounter /> */}
    <ParentComp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
