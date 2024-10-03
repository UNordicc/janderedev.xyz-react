import { FunctionComponent } from "react";
import Greeting from "./Greeting";

const index: FunctionComponent = () => {
  return (
    <>
        <Greeting />
        <div style={{ height: "100vh" }}>
            <img
                src="https://lanyard.cnrad.dev/api/265102629082890240"
                style={{
                    position: "relative",
                    left: "35%",
                    transform: "translateX(-50%)",
                    top: "20%",
                }}
            />
          <a href="https://www.last.fm/user/YOURUSERNAME"><img src="https://lastfm-recently-played.vercel.app/api?user=YOURUSERNAME" right: "35%" top: "20%" width="350px"/></a>
        </div>
    </>
  );
};

export default index;
