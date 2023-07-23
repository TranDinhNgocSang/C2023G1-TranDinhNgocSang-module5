import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ListService from './components/ListService';
import FormHouse from './components/FormHouse';
import FormVilla from './components/FormVilla';
import FormRoom from './components/FormRoom';
import ListCustomer from './components/ListCustomer';
import FormCustomer from './components/FormCustomer';
import ListContract from './components/ListContract';
import FormContract from './components/FormContract';

function App() {
  return (
    <>
<Navbar/>
<ListService/>
<FormHouse/>
<FormVilla/>
<FormRoom/>
<ListCustomer/>
<FormCustomer/>
<ListContract/>
<FormContract/>
<Footer/>
</>
  );
}

export default App;
