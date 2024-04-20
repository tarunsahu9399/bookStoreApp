import React from "react";
import Home from "./Home/Home";
import Collections from "./Collections/Collections";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/collection" element={<Collections />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
