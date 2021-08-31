import React from 'react';


function ContactMe() {
    return (
        <section id="contactme" className="page-section">
            <h1>Contact Me</h1>
            <nav>
                {/* <!-- ANCHOR to navigate to the differernt section with a page  --> */}
                <a className="bot-border" href="#number">206.240.6251</a>
                <a className="bot-border" href="#website">darrenthamtoro@gmail.com</a>
                <a className="bot-border" href="https://github.com">GitHub</a>
                <a className="bot-border" href="https://www.linkedin.com/feed/">LinkedIn</a>
                <a className="bot-border" href="#spotify">Spotify</a>
            </nav>
        </section>
    )
}

export default ContactMe;