import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./features/auth/pages/login";
import Signup from "./features/auth/pages/signup";
import Dashboard from "./features/dashboard/pages/dashboard";
import OAuthCallback from "./features/auth/pages/oauthCallback";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className:
            "!bg-white !text-gray-900 !border !border-gray-200 !shadow dark:!bg-[#111111] dark:!text-white dark:!border-white/10",
        }}
      />
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
