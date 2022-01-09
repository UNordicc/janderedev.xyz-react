import { FunctionComponent, useCallback } from 'react';
import { useState, useEffect } from 'react';
import './navbar.css';

const Texts: string[] = [
    '~/jan.sh',
    'jan://',
    './jan',
    '/usr/bin/jan',
];

const randomText = (excludeNum?: number): number => {
    if (excludeNum === undefined || Texts.length === 1) return Math.floor(Math.random() * Texts.length);
    else {
        const texts = [ ...Texts ];
        texts.splice(excludeNum, 1);
        let i = Math.floor(Math.random() * texts.length);
        if (i >= excludeNum) i++;
        return i;
    }
}

const NavbarText: FunctionComponent = () => {
    const [text, setText] = useState('');
    const [underscore, setUnderscore] = useState(false);
    const [timer, setTimer] = useState(0);
    const [selectedText, setSelectedText] = useState(randomText());

    const updateText = useCallback(() => {
        if (text.length < Texts[selectedText].length) {
            setText(text + Texts[selectedText].charAt(text.length));
        }
        
        if (timer % 5 === 0) {
            setUnderscore(!underscore);
        }
        
        if (timer >= 80) {
            if (text.length > 0) {
                setText(text.substring(0, text.length - 1));
            } else {
                setText('');
                setTimer(0);
                setSelectedText(randomText(selectedText));
                return;
            }
        }

        setTimer(timer + 1);
    }, [selectedText, text, timer, underscore]);

    useEffect(() => {
        const interval = setInterval(updateText, 100);

        return () => clearInterval(interval);
    });

    return (
        <div>
            <span className='navbar-text' onClick={() => window.location.href = '/'}>
                {'> '}{text}{underscore ? '_' : ''}
            </span>
        </div>
    );
}

export default NavbarText;
