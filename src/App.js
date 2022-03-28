import './App.css';
import Navbar from "./NavBar"
import BackGround from './Background';
import StoreListing from './StoreListings';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BackGround/>
      <StoreListing/>
    </div>
  );
}

export default App;
