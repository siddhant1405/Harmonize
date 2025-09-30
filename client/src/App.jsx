import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FindCollab from "./pages/FindCollabs";
import CollabResults from "./pages/CollabResults";
import About from "./pages/AboutUs";
import Message from "./pages/Messages";
import Profile from "./pages/Profile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/findcollab" element={<FindCollab />} />
      <Route path="/collabresults" element={<CollabResults />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Message />} />
    </Routes>
  );
}

export default App;
