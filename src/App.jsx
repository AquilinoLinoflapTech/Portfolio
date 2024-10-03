import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/BackToTop.jsx';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
