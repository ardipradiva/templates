import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import OurStory from './pages/OurStory';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/location" element={<Location />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
