import "./fonts.css";
import Greeting from "./main_page/Greeting";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Greeting />
                <div style={{ height: "100vh" }}>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstyles.redditmedia.com%2Ft5_3gvs7p%2Fstyles%2FcommunityIcon_q2rzyba8wg161.png%3Fwidth%3D256%26s%3D1790af2f987e48c21d8f940258e02d6c1005661f&f=1&nofb=1"
                    style={{
                      position: "relative",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "20%",
                    }}
                  />
                </div>
              </>
            }
          />
          <Route path="/cum" element={
            <>
              <div style={{ height: "64px" }} />
              <h1>cum</h1>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
