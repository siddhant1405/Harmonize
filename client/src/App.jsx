import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Samples from "./pages/SampleLibrary";
import Community from "./pages/CommunityPage";
import About from "./pages/AboutUs";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/samples" element={<Samples />} />
      <Route path="/community" element={<Community />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
