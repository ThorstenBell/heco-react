import React, {useState} from "react";
import logo from "../logo.svg"
import '../Assets/css/nav-bar.css';

interface Props {
    scroll(id: string): void;
}

const NavBar = ({scroll}: Props) => {
    const [navStyle, setNavStyle] = useState({display: 'none'});

    const hamburger = () => {
        if (navStyle.display === 'flex') {
            setNavStyle({display: 'none'})
        } else {
            setNavStyle({display: 'flex'})
        }
    }

    window.onresize = () => {
        if (window.innerWidth < 1000) {
            setNavStyle({display: 'none'})
        } else {
            setNavStyle({display: 'flex'})
        }

    }

    window.onscroll = () => {
        const sections: NodeListOf<HTMLElementTagNameMap["section"]> = document.querySelectorAll("section");
        const navButtons: NodeListOf<HTMLElementTagNameMap["button"]> = document.querySelectorAll(".btn-nav");

        let current: string | null = null;

        sections.forEach((section: HTMLElement) => {
            if (window.scrollY >= section.offsetTop - 64) {
                current = section.getAttribute("id");
            }
        });

        navButtons.forEach((button: HTMLButtonElement) => {
            button.classList.remove("active");
            if (current && button.getAttribute("name") === current) {
                button.classList.add("active");
            }
        })
    }

    const close = () => {
        if (window.innerWidth < 1000) {
            setNavStyle({display: 'none'})
        }
    }

    return (
        <nav>
            <div className="navbar">
                <div className="logo" title="Heco Analytics" onClick={() => {
                    scroll('home');
                    close();
                }}><img src={logo} alt="logo"/>
                </div>

                <div id="hamburger" onClick={() => hamburger()} className={navStyle.display === 'flex' ? 'change' : ''}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <ul id="primary-nav" style={window.innerWidth < 1000 ? navStyle : {}}>
                    <li>
                        <button className="btn-nav" type='button' name='need' onClick={() => {
                            scroll('need');
                            close()
                        }
                        }>Need
                        </button>
                    </li>
                    <li>
                        <button className="btn-nav" type='button' name='tools' onClick={() => {
                            scroll('tools');
                            close()
                        }}>Our
                            tools
                        </button>
                    </li>
                    <li>
                        <button className="btn-nav" type='button' name='platform'
                                onClick={() => {
                                    scroll('platform');
                                    close()
                                }}>Platform
                        </button>
                    </li>
                    <li>
                        <a
                            href="https://d1ffpk7jxmleld.cloudfront.net/"
                            target="_blank" rel="noreferrer"
                            className="btn-nav"
                            type="button"
                            id="btn-login"
                        >Sign in
                        </a>
                    </li>
                    <li>
                        <a className="btn-nav join" href="https://www.linkedin.com/groups/8431494/"
                           target="_blank" rel="noreferrer">Join</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar