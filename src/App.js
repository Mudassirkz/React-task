import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { capitalizeFirstLetter } from "./common/capitalizeFirstLetter";
import { Button } from "antd";
import { ChildComponent } from "./common/component/ChildComponent";

function App() {
  const [count, setCount] = useState(0);

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
    // console.log("res", res);
  }, []);

  // useCallback exampe for function memoization function only run when function call don'y render child component every time.
  const handleUpdateNum = useCallback(() => {
    console.log("clallback renders");
  }, []);

  // use memo stop rendering every when parent component is render it's return a memoized value
  const getChildComp = useMemo(
    () => <ChildComponent handleUpdateNum={handleUpdateNum} />,
    [handleUpdateNum]
  );

  // 1. Use let instead of var
  // if I using var output will // 3 3 3 but if I using Let then output will be // 0 1 2
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      console.log(i); // 0 1 2 3
    }, 1000);
  }
  // 2. Using closures
  for (var i = 0; i < 4; i++) {
    ((n) => {
      setTimeout(() => {
        console.log(n); //  0 1 2 3
      }, 1000);
    })(i);
  }

  return (
    <div className="App">
      <div>
        <p>{count}</p>
        {getChildComp}
        <p></p>
        <Button
          onClick={() => {
            setCount((prevState) => prevState + 1);
          }}
        >
          Addition
        </Button>
      </div>
    </div>
  );
}

export default App;
