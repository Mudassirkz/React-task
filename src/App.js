import { useEffect } from "react";
import "./App.css";
import { capitalizeFirstLetter } from "./common/capitalizeFirstLetter";

function App() {
  const getResult = (array) => {
    let arr = [];
    array.map((item) => {
      if (item[0] < item[2]) {
        arr.push(item[0]);
        arr.push(item[2]);
      }
    });
    let result = capitalizeFirstLetter(arr.join("").toLowerCase());
    return result;
  };
  useEffect(() => {
    let res = getResult(["R>A", "F>R", "A>N", "C>E", "N>C"]);
    console.log("res", res);
  }, []);

  return null;
  // return <div className="App"><div><p>{res}</p></div></div>;
}

export default App;
