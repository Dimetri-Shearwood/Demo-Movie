import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Search1 from './Search1.js';
import Search2 from './Search2.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
         <Navbar />
         <Search1 />
         <Search2 />

      </header>
    </div>
  );
}

export default App;
