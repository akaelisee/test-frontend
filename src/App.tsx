import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import News from "./Pages/News/News";
import Form from "./Pages/Form/Form";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<News />}>
            <Route path="/form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
