import {Routes,Route,Link} from 'react-router-dom'
function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to ='/about'>About</Link><br></br>
      <Link to ='/contact'>Contact</Link>
      </>
  );
}

function About() {
  return (
      <h1>About Page</h1>
  );
}

function Contact() {
  return (
      <h1>Contact Page</h1>
  );
}

function App() {
  return (
<>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About</Link>
  </li>
  <li>
    <Link to="/contact">Contact</Link>
  </li>
</ul>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
</>
  );
}

export default App;
