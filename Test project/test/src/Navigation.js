import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Page2 from "./Page2";
export default function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<App/>} path="/"></Route>
          <Route element={<Page2/>} path="/Page2"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
