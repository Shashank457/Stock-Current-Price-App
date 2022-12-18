//import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Company from "./components/Company";
import Result from'./components/Result';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
    <div className="wrapper">
      {/* <h1>Application</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Company/>} />
          <Route path='/result' element={<Result/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </React.StrictMode>
  );
}


export default App;
