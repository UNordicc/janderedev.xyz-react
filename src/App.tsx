import "./fonts.css";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './pages/main_page';
import TestPage from './pages/test_page';
import DonatePage from './pages/donate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <MainPage /> }/>
          <Route path="/cum" element={ <TestPage /> } />
          <Route path="/donate" element={ <DonatePage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
