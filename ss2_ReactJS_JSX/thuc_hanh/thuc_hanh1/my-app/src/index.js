import React from "react";
import ReactDOM from "react-dom/client";

const name = "Trần Đình Ngọc Sang";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1 style={{ textAlign: "center" }}>{name}</h1>);

const koot = ReactDOM.createRoot(document.getElementById("koot"));

koot.render(<h1 style={{ textAlign: "center",color:"red" }}>{name}</h1>);