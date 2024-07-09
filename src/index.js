import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { FirstApp, SecondApp } from "./components/app"
import { NamesComponent } from "./components/names"
import { ObjectComponent } from "./components/object"


// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




ReactDOM.render(
  React.createElement('div', null, React.createElement('h2', { style: { color: "blue" } }, 'create element')), document.getElementById('root')
);


ReactDOM.render(
  <p>Mustafa</p>, document.getElementById('root')
);

ReactDOM.render(
  <>
    <FirstApp />
    <SecondApp />
  </>, document.getElementById('root')
);

function Counter() {
  const [count, setCount] = useState(0);
  return (<div> <p>You clicked {count} times</p> <button onClick={() => setCount(count + 1)}> Click me </button> </div>);
}

function Example() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (<div><p>You clicked {count} times</p><button onClick={handleClick}>Click me</button></div>);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
root.render(<Example />);
root.render(<><FirstApp /><SecondApp /></>);
root.render(<FirstApp />);
root.render(<SecondApp />);

root.render(<NamesComponent />);
root.render(
  <>
    <ObjectComponent color={"red"} />
    <ObjectComponent color={"green"} />
    <ObjectComponent color={"blue"} />
  </>
);