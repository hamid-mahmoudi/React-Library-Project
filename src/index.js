import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import App from "./App";
import Books from "./Components/Books";
import About from "./Components/About";
import Book from "./Components/Book";
import Contact from "./Components/Contact";
import NotFound from "./Components/notFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/books" element={<Books />}>
            <Route path=":bookId" element={<Book />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
