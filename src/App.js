import Services from "./pages/Services";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  
  return (
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
