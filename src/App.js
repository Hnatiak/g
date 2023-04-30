import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
        <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
          <Button />
        </div>
  );
}

export default App;


// import React from "react";
// import Button from "./components/Button/Button";
// import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
// import Input from "./components/Input/Input";
// import RandomWord from "./components/RandomWord/RandomWord";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <h1>Word Game</h1>
//         <CountdownTimer />
//         <RandomWord />
//         <Input />
//         <Button />
//       </div>
//     </div>
//   );
// }

// export default App;
