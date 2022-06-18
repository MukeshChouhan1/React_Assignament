
import './App.css';

function App() {
  const arr = [{ name: "Android", style: "circle" },
    { name: "Blckberry", style: "circle" },
    { name: "iPhone", style: "circle" },
    { name: "Windows Phone", style: "circle" }]
  
  const arr1 = [{ name: "Samsung", style: "square" },
    { name: "HTC", style: "square" },
    { name: "Micromax", style: "circle" },
    {name:"Apple",style:"circle" }]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      {arr.map((el) => (
        <li className={el.style}>{el.name}</li> 
       ))}
      <h1>Mobile Manufacture</h1>
      {arr1.map((el) => (
        <li className={el.style}>{el.name}</li> 
       ))}
    </div>
  );
}

export default App;
