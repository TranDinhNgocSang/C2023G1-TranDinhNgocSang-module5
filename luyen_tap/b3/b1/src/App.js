import "./App.css";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import FormAdd from "./components/FormAdd";


function App() {
  return (
    <>  
     <Routes>
      <Route path="/" element={<List/>}></Route>
      <Route path="/add" element={<FormAdd/>}></Route>
    </Routes>
    </>
  );
}

export default App;
