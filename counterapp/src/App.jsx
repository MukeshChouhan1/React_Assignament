import {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  // const handleAdd = () => {
  //   setCounter(counter + 1)
  // };
  
  // const handleRemove =() => {
  //       if (counter <= 0) {
  //         return;
  //     }
  //      setCounter(counter - 1)
  // };

  const handleChange = (value) => {
    setCounter(counter + value);
  };
  // if(counter>=10){
  // return <h4>Maximum Value</h4>
  // }
  // if(counter<=-1){
  // // return <h4>Minimum Value</h4>
  //   alert("Limit Over");
  //   return;
  // }
  return (
    <div className="App">
      <div><h3 className={counter % 2 === 0 ? "Even" : "Odd"}>Counter : {counter}</h3></div>
      <button onClick={ () =>handleChange(1)}>Add 1</button>
      <button onClick={() => { if (counter >= 1) { handleChange(-1) } }}>Remove 1</button>
     
      <div>Number is {counter % 2 === 0 ? "Even" : "Odd"}</div>
    </div>
  );
}

export default App;
