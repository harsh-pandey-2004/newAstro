import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookPandit from "./Pages/BookPandit";
import BookPooja from "./Pages/BookPooja";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
          <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-pandit" element={<BookPandit />} />
          <Route path="/book-pooja" element={<BookPooja />} />
        </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
