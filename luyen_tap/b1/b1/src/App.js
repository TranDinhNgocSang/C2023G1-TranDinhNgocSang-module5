import "./App.css";
import List from "./components/List";
import FormAddCustomer from "./components/FormAddCustomer";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<List/>}></Route>
      <Route path="/add-customer" element={<FormAddCustomer/>}></Route>
    </Routes>
    {/* <List/> */}
    </>
  );
}

export default App;
