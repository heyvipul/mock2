
import axios from 'axios';
import AllRoute from './AllRoutes/AllRoute';
import Navbar from './AllRoutes/Navbar';
import './App.css';
axios.defaults.baseURL = "https://plain-boa-shawl.cyclic.app/"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoute/>
    </div>
  );
}

export default App;
