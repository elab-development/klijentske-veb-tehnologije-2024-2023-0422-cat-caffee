import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cafes from './pages/Cafes';
import Cafe from './pages/Cafe';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cafes' element={<Cafes />} />
          <Route path='/cafes/:id' element={<Cafe />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
