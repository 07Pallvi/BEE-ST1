import React from "react";
import Navbar from "./Page1Comps/Navbar";
import Page1 from "./Page1Comps/Page1";
import Page2 from "./Page2Comps/Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Page1 />} />
          <Route path="/record" element={<Page2 />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
