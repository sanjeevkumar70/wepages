
import './App.css';

import Home from './components/Home';
// import About from './components/About';
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Input from './components/Input';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Input/>
    <Home/>
    </div>
  );
}

export default App;
