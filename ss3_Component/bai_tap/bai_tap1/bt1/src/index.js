import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StudentInfoComponent from "./components/StudentInfoComponent";

const students = [
  {
    id: 1,
    name: "Trần Đình Ngọc Sang",
    age: 25,
    address: "Đà Nẵng",
  },
  {
    id: 2,
    name: "Trần Đình Ngọc Quý",
    age: 19,
    address: "Đà Nẵng",
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<StudentInfoComponent listStudent={students} />);
