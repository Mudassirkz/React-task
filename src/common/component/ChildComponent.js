// for use Memo example
import React from "react";
import { Button } from "antd";

export const ChildComponent = ({ handleUpdateNum }) => {
  console.log("Child Component Renderd");
  return (
    <>
      <Button onClick={() => handleUpdateNum()}>for check callback</Button>
      <div>Hello World</div>
    </>
  );
};
