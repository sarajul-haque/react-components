import React from "react";
import "./TrueworkNav.css"
import { SolutionMenuUpperText, SolutionMenuLowerText } from "./SolutionMenu.js";
import "./TrueworkResponsive.css"


const SolutionMenu = ({ show }) => (

    <nav className="solution-list">
        <div className={`solution-menu-list`}>
            <ul className={show ? 'open' : 'closed'}>
                <li>
                    <div>
                        <div className="menu-title"><h5>Built for Different Industries</h5></div>
                        <hr />
                        {SolutionMenuUpperText.map((t, i) => {
                            return (
                                <>
                                    <div key={i}>
                                        <div className="sub-menu-link">
                                            <div >
                                                {t.img}
                                            </div>
                                            <div >
                                                <h3>{t.subTitle}</h3>
                                                <p>{t.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        <div className="menu-title"><h5>Flexible Integrations to Accelerate Verifications</h5></div>
                        <hr />
                        {SolutionMenuLowerText.map((t, i) => {
                            return (
                                <>
                                    <div key={i}>
                                        <div className="sub-menu-link">
                                            <div>
                                                {t.img}
                                            </div>
                                            <div >
                                                <h3>{t.subTitle}</h3>
                                                <p>{t.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <button>Start a Verification <b>&#8594;</b></button>

                </li>
            </ul>
        </div>
    </nav>
);

const TrueworkNav = () => {

    const [isMainNavOpen, setMainNavState] = React.useState(false)
    const [isSubNavOpen, setSubNavState] = React.useState(false)
    const [isHamburger, setHamburger] = React.useState(false)

    return (

        <>
            <nav className="truework-nav">

                <div className="nav-links">

                    <a className="solution-title" href="">
                        <div style={{ display: "inline-block" }} onClick={(e) => {
                            e.preventDefault();
                            console.log('clicked main nav')
                            if (!isMainNavOpen) {
                                document.body.style.backgroundColor = "#eee";

                            } else {

                                document.body.style.backgroundColor = "#fff";

                            }
                            setMainNavState(!isMainNavOpen);


                        }}
                        >
                            <span>Solutions <img className={isMainNavOpen ? 'clicked' : ''} src='/img/sections/navigations/TrueWork/drop-down.png' alt="" height={10} /></span>
                        </div>
                        <SolutionMenu show={isMainNavOpen} />

                    </a>
                    <a className="work-title" onClick={(e) => {
                        e.preventDefault();
                        console.log('click')
                        setSubNavState(!isSubNavOpen);

                    }} href=""><span>How It Works <img className={isSubNavOpen ? 'click' : ''} src='/img/sections/navigations/TrueWork/drop-down.png' alt="" height={10} /></span>

                    </a>
                    <a href=""><span>Documentation <img src='/img/sections/navigations/TrueWork/drop-down.png' alt="" height={10} /></span></a>
                    <a href=""><span>About <img src='/img/sections/navigations/TrueWork/drop-down.png' alt="" height={10} /></span></a>
                </div>
                <div className="truework-logo">
                    <svg viewBox="0 0 128 24" xmlns="http://www.w3.org/2000/svg" ><path d="M0 6a6 6 0 016-6h6.239v12H6a6 6 0 01-6-6z" fill="#2CD280"></path><path d="M12.238 0h.239c6.627 0 12 5.373 12 12H12.238V0z" fill="#03A6A5"></path><path d="M12.238 12h12.239v5.88a6.12 6.12 0 01-12.239 0V12z" fill="#57BEFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.046 5.86A5.86 5.86 0 0130.906 0h.234a5.86 5.86 0 110 11.72h-.233a5.86 5.86 0 01-5.86-5.86z" fill="#5B63FE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M127.988 19.746l-4.628-6.815 4.244-4.084h-2.666l-5.012 4.888V4h-1.813v15.746h1.813v-3.513l2.111-2.032 3.754 5.545h2.197zm-77.166 0v-1.65c-1.343.084-2.538-.403-2.538-2.329v-5.206h2.496V8.847h-2.495V6.519h-1.792v2.328H45v1.714h1.493v5.206c0 2.773 1.77 4.275 4.33 3.979zm6.923-11.111c-2.88-.339-5.246 1.333-5.246 4.635v6.476h1.791v-6.518c0-2.096 1.344-3.112 3.455-2.921V8.635zm10.932.212v10.899h-1.749v-1.185C66.182 19.45 65.073 20 63.73 20c-2.687 0-4.223-1.905-4.223-4.593v-6.56h1.792v6.645c0 1.735.96 2.878 2.709 2.878 1.62 0 2.858-1.206 2.858-2.836V8.847h1.812zm12.895 7.513h-1.92c-.597 1.27-1.706 2.01-3.263 2.01-1.813 0-3.562-1.333-3.796-3.598h9.234c.022-3.873-2.708-6.2-5.545-6.2-3.05 0-5.523 2.581-5.523 5.735 0 3.196 2.474 5.693 5.63 5.693 2.538 0 4.415-1.312 5.183-3.64zm-8.873-3.196h7.124c-.448-1.778-1.941-2.963-3.54-2.963-1.515 0-3.114 1.1-3.584 2.963zm20.551 3.873l-2.346-8.19h-1.877l-2.346 8.19-2.346-8.19h-1.898l3.285 10.899h1.876l2.346-8.339 2.346 8.339h1.898l3.285-10.9h-1.898l-2.325 8.191zm10.335-8.466c3.135 0 5.524 2.582 5.524 5.757 0 3.132-2.389 5.672-5.524 5.672-3.114 0-5.524-2.54-5.524-5.672 0-3.175 2.41-5.757 5.524-5.757zm3.711 5.757c0 2.222-1.663 4.021-3.711 4.021-2.026 0-3.69-1.799-3.69-4.021 0-2.264 1.664-4.106 3.69-4.106 2.048 0 3.711 1.841 3.711 4.106zm3.766-1.058c0-3.302 2.368-4.974 5.247-4.635v1.672c-2.111-.19-3.455.825-3.455 2.92v6.519h-1.792V13.27z" fill="currentColor"></path></svg>
                </div>
                <div className="truework-right-nav">
                    <a href=""><span>Sign In</span></a>
                    <div className="verification-section">
                        <a className="verification-title" href=""><span >Start a Verification </span></a>
                        <img src="/img/sections/navigations/TrueWork/search.svg" alt="" />
                    </div>
                </div>

                {/********************************************* * responsive truework  **********************************************/}

                <div className={`hamburger ${isHamburger ? "hamburger-open" : "hamburegr-close"}`} onClick={() => {
                    if (isHamburger) {
                        setSubNavState(false)
                    }
                    setHamburger(!isHamburger);

                }
                }>
                    <div className="slice slice-1"></div>
                    <div className="slice slice-2"></div>
                    <div className="slice slice-3"></div>
                </div>

            </nav>

            <div className={`mobile-nav-links ${isHamburger ? "mobile-links-open" : "mobile-links-close"}`}>

                <a onClick={(e) => {
                    e.preventDefault();
                    console.log('clicked')
                    setSubNavState(!isSubNavOpen);


                }} className={`mobile-menu-list ${isHamburger ? "mobile-menu-open" : "mobile-menu-close"}`} href="">Solutions  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </a>
                <div className={isSubNavOpen ? "solution-menu-open" : "solution-menu-close"}>
                    <nav className="solution-list">
                        <div className={`mobile-solution-menu-list`}>
                            <ul className={`${isHamburger ? "mobile-menu-open" : "mobile-menu-close"}`}>
                                <li>
                                    <div className="mobile-solution-menu-link">
                                        <div className="mobile-menu-title"><h5>Built for Different Industries</h5></div>

                                        {SolutionMenuUpperText.map((t, i) => {
                                            return (
                                                <>
                                                    <div key={i}>
                                                        <div className="mobile-sub-menu-link">
                                                            <div >
                                                                {t.img}
                                                            </div>
                                                            <div >
                                                                <h3>{t.subTitle}</h3>
                                                                <p>{t.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}
                                        <div className="mobile-menu-flex-title"><h5>Flexible Integrations to Accelerate Verifications</h5></div>

                                        {SolutionMenuLowerText.map((t, i) => {
                                            return (
                                                <>
                                                    <div key={i}>
                                                        <div className="mobile-sub-menu-link">
                                                            <div>
                                                                {t.img}
                                                            </div>
                                                            <div >
                                                                <h3>{t.subTitle}</h3>
                                                                <p>{t.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })}

                                    </div>
                                    <button>Start a Verification <b>&#8594;</b></button>

                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <a href="">How It Works <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg></a>

                <a href="">Documentation <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg></a>

                <a href="">About <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"

                >
                    <path d="m6 9 6 6 6-6" />
                </svg></a>



            </div>




        </>


    );
};

export default TrueworkNav;