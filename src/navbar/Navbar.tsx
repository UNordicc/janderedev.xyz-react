import { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import './navbar.css';
import NavbarLink from './NavbarLink';
import NavbarLinkDivider from './NavbarLinkDivider';
import NavbarText from './NavbarText';

const Navbar: FunctionComponent = () => {
    const [hidden, setHidden] = useState(window.scrollY > 64);

    useEffect(() => {
        const handleScroll = () => {
            setHidden(window.scrollY > 64);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`navbar ${hidden ? 'navbar-collapsed' : ''}`}>
            <NavbarText />
            <div className='navbar-link-container'>
                <NavbarLink text='Home' link='/'/>
                <NavbarLinkDivider />
                <NavbarLink text='Donate' link='/donate'/>
                <NavbarLinkDivider />
                <NavbarLink text='Revolt' link='https://rvlt.gg/jan' external/>
            </div>
        </div>
    )
}

export default Navbar;
