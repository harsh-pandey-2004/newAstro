import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookPandit from "./Pages/BookPandit";
import BookPooja from "./Pages/BookPooja";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AstrologerPage from "./Pages/AstrologerPage";
import KundaliMatching from "./Pages/KundaliMatching";
import FreeKundali from "./Pages/FreeKundali";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-pandit" element={<BookPandit />} />
          <Route path="/book-pooja" element={<BookPooja />} />
          <Route path="/astro-page" element={<AstrologerPage />} />
          <Route path="/free-matching" element={<FreeKundali />} />
          <Route path="/kundali-matching" element={<KundaliMatching />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
