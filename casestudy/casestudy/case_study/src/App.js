import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListService from "./components/ListService";
import FormAddVilla from "./components/FormAddVilla";
import FormAddHouse from "./components/FormAddHouse";
import FormAddRoom from "./components/FormAddRoom";
import ListCustomer from "./components/ListCustomer";
import FormCustomer from "./components/FormCustomer";
import ListContract from "./components/ListContract";
import FormContract from "./components/FormContract";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListService />}></Route>
        <Route path="/add-villa" element={<FormAddVilla />}></Route>
        <Route path="/add-house" element={<FormAddHouse />}></Route>
        <Route path="/add-room" element={<FormAddRoom />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
