import React from "react";
import "./TrueworkNav.css"

const SolutionMenu = ({ show }) => (

    <nav className="solution-list">
        <div className={`solution-menu-list`}>
            <ul className={show ? 'open' : 'closed'}>
                <li>

                    <div>
                        <div className="menu-title"><h5>Built for Different Industries</h5></div>
                        <hr />
                        <div className="sub-menu-link">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                ><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <div >
                                <h3>Mortgage</h3>
                                <p className="menu-p">Close Loans Faster</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" ><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <div className="tick">
                                <h3>Consumer Lending</h3>
                                <p>Approve More Borrowers</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <polyline points="17 11 19 13 23 9"></polyline></svg>
                            </div>
                            <div>
                                <h3>Pre-employment</h3>
                                <p>Verify Employment History</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                            <div>
                                <h3>Tenant Screening</h3>
                                <p>Mitigate Fraud Risk</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="menu-title"><h5>Flexible Integrations to Accelerate Verifications</h5></div>
                        <hr />
                        <div className="sub-menu-link">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            </div>
                            <div>
                                <h3>Truework</h3>
                                <p>Overview of the Truework platform</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                                    <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                                    <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                                    <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                                    <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                                    <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                                </svg>
                            </div>
                            <div>
                                <h3>Truework & Encompass®</h3>
                                <p>Connect Truework to your loan origination system</p>
                            </div>
                        </div>
                        <div className="sub-menu-link">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                ><line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                            </div>
                            <div>
                                <h3>Pricing</h3>
                                <p>Enterprise plans and volume-based discounts available</p>
                            </div>
                        </div>

                    </div>
                    <button>Start a Verification <b>&#8594;</b></button>

                </li>
            </ul>
        </div>
    </nav>
);

const TrueworkNav = () => {

    const [isOpen, setOpen] = React.useState(false)
    const [Open, setOpens] = React.useState(false)

    return (

        <nav className="truework-nav">
            <div>

                <a className="solution-title" href="">
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
                        <span>Solutions <img className={isOpen ? 'clicked' : ''} src='/img/sections/navigations/TrueWork/drop-down.png' alt="" height={10} /></span>
                    </div>
                    <SolutionMenu show={isOpen} />

                </a>
                <a className="work-title" onClick={(e) => {
                    e.preventDefault();
                    console.log('click')
                    setOpens(!Open);

                }} href=""><span>How It Works <img className={Open ? 'click' : ''} src='/img/sections/navigations/TrueWork/drop-down.png' alt="" height={10} /></span>

                </a>
                <a href=""><span>Documentation <img src='/img/sections/navigations/TrueWork/drop-down.png' alt="" height={10} /></span></a>
                <a href=""><span>About <img src='/img/sections/navigations/TrueWork/drop-down.png' alt="" height={10} /></span></a>
            </div>
            <div className="truework-logo">
                <a href="https://getlogo.net/truework-logo-vector-svg/" target="_blank"><img src="https://getlogo.net/wp-content/uploads/2020/11/truework-logo-vector.png" height={70} /></a>
            </div>
            <div className="truework-right-nav">
                <a className="truework-right-nav-sign" href=""><span>Sign In</span></a>
                <a href=""><span className="verification-title">Start a Verification <hr /><img src="/img/sections/navigations/TrueWork/search.svg" alt="" /></span></a>
            </div>


            {/* {isOpen && ()} */}
        </nav>

    );
};

export default TrueworkNav;