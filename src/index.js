import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Subhadip";
const lname = "Chatterjee";

ReactDOM.render(
  <>
    <h1 style={{ color: "blue" }}>{`My name is ${fname} ${lname}`}</h1>
  </>, document.getElementById("root"));