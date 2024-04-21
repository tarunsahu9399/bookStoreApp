import React from "react";
import Home from "./Home/Home";
import Collections from "./Collections/Collections";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import { Navigate } from "react-router-dom";

function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/collection" element={authUser ? <Collections /> : <Navigate to="/signup" /> }></Route>
          <Route path="/signup" element={<Signup /> }></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
