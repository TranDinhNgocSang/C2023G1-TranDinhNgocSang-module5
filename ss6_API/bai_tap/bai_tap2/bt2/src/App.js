
import ListBooks from './components/ListBooks';
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<ListBooks/>}></Route>
    <Route path='/add' element={<AddForm/>}/>
    <Route path='/edit/:id' element={<EditForm/>}/>
   </Routes>
   </>
  );
}

export default App;
