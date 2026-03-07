import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./features/auth/pages/login";
import Signup from "./features/auth/pages/signup";
import Dashboard from "./features/dashboard/pages/dashboard";
import OAuthCallback from "./features/auth/pages/oauthCallback";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth-success" element={<OAuthCallback />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
