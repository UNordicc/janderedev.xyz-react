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
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "20%",
                }}
            />
        </div>
    </>
  );
};

export default index;
