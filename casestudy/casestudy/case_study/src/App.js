import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListService from "./components/ListService";
import FormAddVilla from "./components/FormAddVilla";
import FormAddHouse from "./components/FormAddHouse";
import FormAddRoom from "./components/FormAddRoom";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import FormEditVilla from "./components/FormEditVilla";
import FormEditHouse from "./components/FormEditHouse";
import FormEditRoom from "./components/FormEditRoom";
import ListCustomer from './components/ListCustomer';
import ListContract from './components/ListContract';
import FormAddCustomer from "./components/FormAddCustomer";
import FormEditCustomer from "./components/FormEditCustomer";
import FormAddContract from "./components/FormAddContrac";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListService />}></Route>
        <Route path="/add-villa" element={<FormAddVilla />}></Route>
        <Route path="/add-house" element={<FormAddHouse />}></Route>
        <Route path="/add-room" element={<FormAddRoom />}></Route>
        <Route path="/edit-villa/:id" element={<FormEditVilla/>}></Route>
        <Route path="/edit-house/:id" element={<FormEditHouse/>}></Route>
        <Route path="/edit-room/:id" element={<FormEditRoom/>}></Route>
        <Route path="/customer" element={<ListCustomer/>}></Route>
        <Route path="/contract" element={<ListContract/>}></Route>
        <Route path="/add-customer" element={<FormAddCustomer/>}></Route>
        <Route path="/edit-customer/:id" element={<FormEditCustomer/>}></Route>
        <Route path="/add-contract" element={<FormAddContract/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
