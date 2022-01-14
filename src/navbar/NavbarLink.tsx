import { FunctionComponent } from "react";

const NavbarLink: FunctionComponent<{ text: string, link: string }> = (props) => {
    return (
        <span className="navbar-link-text" onClick={() => window.location.href = props.link}>{props.text}</span>
    );
}

export default NavbarLink;
