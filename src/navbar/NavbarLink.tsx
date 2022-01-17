import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const NavbarLink: FunctionComponent<{ text: string, link: string, external?: boolean }> = (props) => {
    if (props.external) return <a href={props.link} className="navbar-link-text no-link-effect">{props.text}</a>
    else return <Link to={props.link} className="navbar-link-text no-link-effect">{props.text}</Link>
}

export default NavbarLink;
