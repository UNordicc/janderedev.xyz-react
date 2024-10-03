import { FunctionComponent } from "react";
import Greeting from "./Greeting";

const index: FunctionComponent = () => {
  return (
    <>
        <Greeting />
        <div style={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img
                src="https://lanyard.cnrad.dev/api/265102629082890240"
                style={{
                    marginBottom: "20px",
                }}
            />
            <a href="https://www.last.fm/user/UNordic">
              <img src="https://lastfm-recently-played.vercel.app/api?user=UNordic" alt="Recently Played" height="auto" width="350px" />
            </a>
        </div>
    </>
  );
};

export default index;
