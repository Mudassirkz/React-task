import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { capitalizeFirstLetter } from "./common/capitalizeFirstLetter";
import { Button } from "antd";
import { ChildComponent } from "./common/component/ChildComponent";
import axios from "axios";

function App() {
  // const [count, setCount] = useState(0);

  // const getResult = (array) => {
  //   let arr = [];
  //   array.map((item) => {
  //     if (item[0] < item[2]) {
  //       arr.push(item[0]);
  //       arr.push(item[2]);
  //     }
  //   });
  //   let result = capitalizeFirstLetter(arr.join("").toLowerCase());
  //   return result;
  // };
  // useEffect(() => {
  //   let res = getResult(["R>A", "F>R", "A>N", "C>E", "N>C"]);
  //   // console.log("res", res);
  // }, []);

  // // useCallback exampe for function memoization function only run when function call don'y render child component every time.
  // const handleUpdateNum = useCallback(() => {
  //   console.log("clallback renders");
  // }, []);

  // // use memo stop rendering every when parent component is render it's return a memoized value
  // const getChildComp = useMemo(
  //   () => <ChildComponent handleUpdateNum={handleUpdateNum} />,
  //   [handleUpdateNum]
  // );

  // // 1. Use let instead of var
  // // if I using var output will // 3 3 3 but if I using Let then output will be // 0 1 2
  // for (let i = 0; i < 3; i++) {
  //   setTimeout(() => {
  //     console.log(i); // 0 1 2
  //   }, 1000);
  // }
  // // 2. Using closures
  // for (var i = 0; i < 3; i++) {
  //   ((n) => {
  //     setTimeout(() => {
  //       console.log(n); //  0 1 2
  //     }, 1000);
  //   })(i);
  // }

  const [questionsData, setQuestionsData] = useState([])
  const [sectionsData, setSectionssData] = useState([])


  const getData = async () => {
     await axios
      .get("https://mvprun.hasura.app/api/rest/getSectionAndQuestion", {
        headers: {
        "x-hasura-admin-secret":
        "WO09mIBE1e137dhmk7dlMp9Pw4Fpm1T7UPULLTwyP1AoKxXV10OJATt6H88JUX5w",
      }
      })
       .then(function (response) {
         if (response?.data) {
           setQuestionsData(response?.data?.fwg_new_customers_platform_questions)
           setSectionssData(response?.data?.fwg_new_customers_platform_sections)
        }
      })
      .catch(function (error) {
        console.log("error", error)
      })
  }
  
  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <div className="App">
         <h3 className="section-name">Section Name: {sectionsData[8]?.section_name}</h3>
      <p className="section-description">Section Description: {sectionsData[8]?.section_description}</p>
      {questionsData?.map((item, index) => (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} key={ index } className="question-container">
          <div style={{textAlign: "left", width: 800}}>
          <p className="question-text">{index + 1}: {item?.question_text}</p>
          <div style={{marginTop: 20}} className="answer-options">
            <label className="answer-option">
              <input
                type="radio"
                name={`question-${index}`}
                value="Yes"
                // checked={answers[item?.question_id] === "Yes"}
                // onChange={() => handleAnswerChange(item?.question_id, "Yes")}
              />
              Yes
            </label>
            <label className="answer-option">
              <input
                type="radio"
                name={`question-${index}`}
                value="No"
                // checked={answers[item?.question_id] === "No"}
                // onChange={() => handleAnswerChange(item?.question_id, "No")}
              />
              No
            </label>
          </div>
        </div>
          </div>
         
      ))}
          {/* <p>{count}</p>
          {getChildComp}
          <Button
            onClick={() => {
              setCount((prevState) => prevState + 1);
            }}
          >
            Addition
          </Button> */}
      </div>
    </>
  );
}

export default App;
