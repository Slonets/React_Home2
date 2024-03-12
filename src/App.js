import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import {Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import Privacy from "./components/Privacy";

function App() {
  return (
      <div>
          <header>
         <h2>Home react #2</h2>
              <Menu/>
          </header>

<main>
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        <Route path="/privacy" element={<Privacy/>} />
    </Routes>
</main>
      </div>
  );
}

export default App;
