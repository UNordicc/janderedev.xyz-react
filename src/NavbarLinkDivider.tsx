import { FunctionComponent } from "react";

const NavbarLinkDivider: FunctionComponent = (props) => {
    return (
            <span
              className="navbar-link-text"
              style={{
                  "marginLeft": "6px",
                  "marginRight": "6px",
                  "cursor": "unset",
                }}
            >|</span>
    );
}

export default NavbarLinkDivider;
