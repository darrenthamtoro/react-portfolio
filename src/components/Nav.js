import React from 'react';

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <nav className="page-section">
            <header>
                <h1 className="name-border">Darren</h1>
                <nav>
                    <a href="#about">About Me</a>
                    <a href="#work">Portfolio</a>
                    <a href="#contactme">Contact Me</a>
                    <a href="file:///Users/darrenthamtoro/Downloads/Updated%20resume.pdf">Resume</a>
                </nav>
            </header>
        </nav>
    );
}
