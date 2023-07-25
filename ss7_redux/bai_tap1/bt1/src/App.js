import Header from "./components/Header";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import ListUsers from "./components/ListUser";


function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/list" element={<ListUsers/>}></Route>
    </Routes>
    </>
  );
}

export default App;
