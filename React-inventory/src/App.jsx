import { useState } from "react";
import "./App.css";

function App() {
  const [BooksCount, setBooksCount] = useState(13);
  const [PensCount, setPensCount] = useState(10);
  const [NotebooksCount, setNotebooksCount] = useState(44);
  const [InkpensCount, setInkpensCount] = useState(78);
  const [TotalCount, setTotalCount] = useState(145);
  const handlingbooks = (value) => {
    setBooksCount(BooksCount + value);
    setTotalCount(TotalCount + value);
  };
  const handlingpens = (value) => {
    setPensCount(PensCount + value);
    setTotalCount(TotalCount + value);
  };
  const handlingNotebooks = (value) => {
    setNotebooksCount(NotebooksCount + value);
    setTotalCount(TotalCount + value);
  };
  const handlingInkpens = (value) => {
    setInkpensCount(InkpensCount + value);
    setTotalCount(TotalCount + value);
  };
  return (
    <div className="mainBox">
      <div className="heading">Inventory</div>
      <div className="items">
        <span>Books:-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
        <button className="addBook" onClick={() => handlingbooks(1)}>
          +
        </button>
        <button
          className="remBook"
          onClick={() => {
            if (BooksCount >= 1) {
              handlingbooks(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalBooks">{BooksCount}</span>
      </div>
      <div className="items">
        <span>Pens :-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button className="addPen" onClick={() => handlingpens(1)}>
          +
        </button>
        <button
          className="remPen"
          onClick={() => {
            if (PensCount >= 1) {
              handlingpens(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalPens">{PensCount}</span>
      </div>
      <div className="items">
        <span>Notebooks:</span>
        <button className="addNotebook" onClick={() => handlingNotebooks(1)}>
          +
        </button>
        <button
          className="remNotebook"
          onClick={() => {
            if (NotebooksCount >= 1) {
              handlingNotebooks(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalNotebooks">{NotebooksCount}</span>
      </div>
      <div className="items">
        <span>InkPens:-&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <button className="addInkpen" onClick={() => handlingInkpens(1)}>
          +
        </button>
        <button
          className="remInkpen"
          onClick={() => {
            if (InkpensCount >= 1) {
              handlingInkpens(-1);
            }
          }}
        >
          -
        </button>
        <span className="totalInkpens">{InkpensCount}</span>
      </div>
      <div className="total">Total vdfpi;hkfhkdfjfk {TotalCount}</div>
    </div>
  );
}

export default App;
