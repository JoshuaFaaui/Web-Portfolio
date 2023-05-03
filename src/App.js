import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <>
      <Routes>
        <Route path="/Web-Portfolio" element={<Home />} />
        <Route path="/contactform" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
