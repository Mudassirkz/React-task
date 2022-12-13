import "./App.css";
import { capitalizeFirstLetter } from "./common/capitalizeFirstLetter";

function App() {
  let arr = [];
  ["R>A", "F>R", "A>N", "C>E", "N>C"].map((item, index) => {
    if (item[0] < item[2]) {
      arr.push(item[0]);
      arr.push(item[2]);
    }
  });
  let result = capitalizeFirstLetter(arr.join("").toLowerCase());

  return (
    <div className="App">
      <div>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
