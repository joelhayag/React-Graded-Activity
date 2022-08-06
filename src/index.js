import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Exercise1 from "./Exercises/Exercise1";
import Exercise2 from "./Exercises/Exercise2";
import Exercise3 from "./Exercises/Exercise3";
import Exercise4 from "./Exercises/Exercise4";
import Exercise5 from "./Exercises/Exercise5";
import Exercise6 from "./Exercises/Exercise6";
import Layout from "./Exercises/Navlinks";
import Home from "./Exercises/Home";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/"
        element={<Layout/>}>
        <Route index
          element={<Home/>}/>
        <Route path="exercise1"
          element={<Exercise1/>}/>
        <Route path="exercise2"
          element={<Exercise2/>}/>
        <Route path="exercise3"
          element={<Exercise3/>}/>
        <Route path="exercise4"
          element={<Exercise4/>}/>
        <Route path="exercise5"
          element={<Exercise5/>}/>
        <Route path="exercise6"
          element={<Exercise6/>}/>
      </Route>
    </Routes>
  </BrowserRouter>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (<App/>);
