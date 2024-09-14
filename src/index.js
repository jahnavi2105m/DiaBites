import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Form from "./views/custom-components/form.jsx"
import Result from "./views/custom-components/result.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/custom-components" element={<CustomComponents />} />
      <Route path="/" element={<Components />} />
      <Route path="/forms" element={<Form/>}/>
      <Route path="/result" element={<Result/>}/>
    </Routes>
  </HashRouter>
);


