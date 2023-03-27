import React from "react";
import "./OmnisendNav.css"
import "./OmnisendResponsive.css"
import { FeaturesMenuItems, shortcuts } from "./FeaturesMenu";

const FeaturesMenu = ({ show }) => (

    <nav className="feature-list">
        <div className={`feature-menu-list`}>
            <ul className={show ? 'open' : 'closed'}>
                <li>
                    <div>
                        <div className="submeniu-title"><h5>KEY FEATURES</h5></div>
                    </div>

                    <div className="sub-feature-menu">
                        <div>
                            <div className="sub-menu-link">
                                <h3>Email marketing</h3>
                                <p>Build better relationships with customers</p>
                            </div>
                            <div className="sub-menu-link">
                                <h3>Marketing automation</h3>
                                <p>Send the right message automatically</p>
                            </div>
                            <div className="sub-menu-link">
                                <h3>SMS</h3>
                                <p>Text your customers globally</p>
                            </div>
                        </div>

                        <div>
                            <div className="sub-menu-link">
                                <h3>Web push notifications</h3>
                                <p>Instantly retarget your customers</p>
                            </div>
                            <div className="sub-menu-link">
                                <h3>Popups &amp; Forms</h3>
                                <p>Grow your audience &amp; boost sales</p>
                            </div>
                            <div className="sub-menu-link">
                                <h3>Reports</h3>
                                <p>Learn &amp; make better decisions</p>
                            </div>
                        </div>

                        <div>
                            <div className="sub-menu-link">
                                <h3>Segmentation</h3>
                                <p>Target the right people</p>
                            </div>
                            <div className="sub-menu-link">
                                <h3>Audience sync for ads</h3>
                                <p>Increase your reach on social media</p>
                            </div>

                        </div>

                        <hr />
                        <div>
                            <div className="submeniu-title"><h3>SHORTCUTS</h3></div>

                            <div className="product-items">
                                <a className="list" href=""><span>All features <b>&#62;</b></span></a>
                                <hr />
                                <a href=""><span>All channels <b>&#62;</b></span></a>
                                <hr />
                                <a href=""><span>Integrations <b>&#62;</b></span></a>
                                <hr />
                                <a href=""><span>Support <b>&#62;</b></span></a>
                            </div>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </nav>
);

const OmnisendNav = (shows) => {

    const [isOpen, setOpen] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)
    const [isFeature, setFeature] = React.useState(false)



    return (

        <>
            <nav className="omnisend-nav">
                <div><img className="omnisend-logo" src='/img/sections/navigations/OmniSend/omnisend-logo.svg' alt='' height={20} /></div>
                <div>
                    <a href="">
                        <div style={{ display: "inline-block" }} onClick={(e) => {
                            e.preventDefault();
                            console.log('clicked')
                            if (!isOpen) {
                                document.body.style.backgroundColor = "#eee"
                            } else {
                                document.body.style.backgroundColor = "#fff";
                            }
                            setOpen(!isOpen);

                        }}
                        >
                            <span>Features <img className={isOpen ? 'clicked' : ''} src='/img/sections/navigations/OmniSend/drop-down.png' alt="" height={10} /></span>
                        </div>


                    </a>
                    <a href=""><span>Pricing</span></a>
                    <a href=""><span>Migration</span></a>
                    <a href=""><span>Success Stories</span></a>
                    <a href=""><span>Resources</span></a>
                </div>

                <div className="onmisend-right-nav">
                    <a href=""><span>Search <img src="/img/sections/navigations/OmniSend/search.svg" alt="" /></span></a>
                    <a className="onmisend-right-nav-request" href=""><span>Request demo</span></a>
                    <a className="onmisend-right-nav-start" href=""><span>Start free</span></a>
                    <a href=""><span>Login</span></a>
                </div>
                <FeaturesMenu show={isOpen} />

                <div className={`hamburger ${isHamburger ? "hamburger-open" : "hamburegr-close"}`} onClick={() => {
                    if (isHamburger) {
                        setOpen(false)
                    }
                    setHamburger(!isHamburger);

                }
                }>
                    <div><img src="/img/sections/navigations/OmniSend/search.svg" alt="" height={20} /></div>
                    <div>
                        <div className="slice slice-1"></div>
                        <div className="slice slice-2"></div>
                        <div className="slice slice-3"></div>
                    </div>
                </div>

            </nav>

            <div className={`omnisend-mobile-nav-links ${isHamburger ? "omnisend-mobile-links-open" : "omnisend-mobile-links-close"}`}>
                <a onClick={(e) => {
                    e.preventDefault();
                    console.log('clicked')

                    setFeature(!isFeature);

                }}>Features <img src='/img/sections/navigations/OmniSend/drop-down.png' alt="" height={10} />

                </a>
                <div className={`features-menu-container ${isFeature ? "mobile-menu-open" : "mobile-menu-close"}`}>
                    <nav>
                        <ul className={shows ? 'open' : 'closed'}>
                            <li>
                                <div>
                                    <h3>Key Features</h3>
                                    {FeaturesMenuItems.map((t, i) => {
                                        return (
                                            <>
                                                <div key={i}>
                                                    <div className="mobile-sub-menu-link">
                                                        <h5>{t}</h5>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })}
                                    <h3>Shortcuts</h3>
                                    {shortcuts.map((t, i) => {
                                        return (
                                            <>
                                                <div key={i} className="shortcuts-feature">
                                                    <div>{t}</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <a href="">Pricing</a>
                <a href="">Migration</a>
                <a href="">Success Stories</a>
                <a href="">Resources</a>
            </div>

        </>

    );
};

export default OmnisendNav;