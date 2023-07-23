import { Routes, Route, Link, useNavigate,useParams } from "react-router-dom";

function Catelogy() {
  let navigate = useNavigate();
  const sendDataToProduct = (even)=> navigate(`/product/${even.target.value}`);
  return (
    <>
      <h2>Select catelogy</h2>
      <select defaultValue={"aa"} onChange={sendDataToProduct}>
        <option value={"aa"}>Choose your car</option>
        <option value="1">Honda</option>
        <option value="2">Suzuki</option>
        <option value="3">Yamaha</option>
      </select>
    </>
  );
}

function Product(){
let {param}= useParams();
  return(
    <>
    <h1>{param}</h1>
    <Link to="/">home</Link>
    </>
  )
}

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Catelogy/>}></Route>
    <Route path="/product/:param" element={<Product/>}  />
   </Routes>
   </>
  );
}

export default App;
