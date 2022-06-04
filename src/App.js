import Income from "./features/income/Income";
import Counter from "./features/counter/Counter";


function App() {
  return (
    <div className="container">
      <header>
        <h1 className="text-center">Income and Expanse App</h1>
      </header>
      <Counter/>
      <Income/>
    </div>
  );
}

export default App;
