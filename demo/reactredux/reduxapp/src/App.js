import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <a className="quantity__minus" href="#" title="Decrement"><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value="0" />
        <a href="#" className="quantity__plus"  title="Increment"><span>+</span></a>


      </div>

    </div>
  );
}

export default App;
