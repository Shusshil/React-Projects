//import logo from './logo.svg';
import React, {useState} from "react";
//import {Circle, Square} from 'react-awesome-shapes'
//import Square from './Square/square';
//import Circle from './Circle/circle'
import './App.css';
//import { render } from 'react-dom';

let count = 0;
function App() {
  const [shape, setShape] = useState('Square');
  function getShape(){
     if(shape === 'Square'){
      //  <Square backgroundColor = 'red'/>
      const shape = document.getElementById('shapes-holder');
      shape.innerHTML += `<div class='square'>${count}</div>`;
      //render(<Square/>, shape)
     }
     else if(shape === 'Circle'){
      //  <Circle backgroundColor = 'purpule'/>
      const shape = document.getElementById('shapes-holder');
      shape.innerHTML += `<div class='circle'>${count}</div>`;
      //render(<Circle/>, shape)
     }
     count++;
  }
  return (
    <div>
      <div id="shape-creator">
      <select value={shape} onChange={(e) => {setShape(e.target.value)}}>
        <option value="Square">Square</option>
        <option value="Circle">Circle</option>
       </select>
       <button onClick={getShape}>Add Shape</button>
      </div>
       <div id="shapes-holder">
       
       </div>
    </div>
  );
}

export default App;
