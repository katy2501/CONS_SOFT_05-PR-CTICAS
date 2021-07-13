import './App.css';

import ListCards from './componets/Cards/Cards/ListCards'
import Navbar from './componets/Navbar/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListCards/> 
    </div>
  );
}

export default App;
