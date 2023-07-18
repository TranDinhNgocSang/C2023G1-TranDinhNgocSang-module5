import ReactDOM from "react-dom/client";

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Apricot",
  "Black rowan",
  "Cranberry"
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>List of fruits</h1>
    <ul>
      {fruits.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

const koot = ReactDOM.createRoot(document.getElementById("koot"));

const tick = () => {
  koot.render(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
};
setInterval(tick, 1000);

const boot = ReactDOM.createRoot(document.getElementById("boot"));
boot.render(<h4>Browser's details: {navigator.userAgent}</h4>)