import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import HeritagePlaces from "./pages/HeritagePlaces";
import AudioRecording from "./pages/AudioRecording";
import Question from "./pages/Question";
import Suggest from "./pages/Suggest";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/heritage" element={<HeritagePlaces />} />
          <Route path="/audio" element={<AudioRecording />} />
          <Route path="/question" element={<Question />} />
          <Route path="/suggest" element={<Suggest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
