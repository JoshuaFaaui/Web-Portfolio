import Portfolio from "./pages/Portfolio";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  
  return (
    <Routes>
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
