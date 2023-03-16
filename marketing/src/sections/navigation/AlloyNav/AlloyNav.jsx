import React from "react";
import "./AlloyNav.css"

const ProductMenu = () => (

    <nav className="menu-list">
        <ul>
            <li className="menu-li">
                <div>
                    <div className="menu-items">
                        <div >
                            <img src='/img/sections/hero/HeadStream/alloyLogos.png' alt='' height={30} />
                        </div>
                        <div>
                            Automation-for brands
                        </div>
                    </div>
                    <div>
                        <p>A control panel connect your apps and <br />automate tasks.</p>
                        <hr />
                    </div>
                    <div className="product-items">
                        <h4 href="">Ecommerce & Product</h4>
                        <h4 href="">Marketing</h4>
                        <h4 href="">Logistics & Support</h4>
                        <h4 href="">Data & Analytics</h4>
                        <h4 href="">Pricing</h4>
                    </div></div>
                <div>
                    <div className="menu-items">
                        <div >
                            <img src='/img/sections/hero/HeadStream/alloyLogos.png' alt='' height={30} />
                        </div>
                        <div>
                            Forge-for SaaS companies
                        </div>
                    </div>
                    <div>
                        <p>The fastest way to add ecommerce data and<br />integrations to your platform.</p>
                        <hr />
                    </div>
                    <div className="product-items">
                        <h4 href="">Marketing</h4>
                        <h4 href="">Fintech</h4>
                        <h4 href="">Logistics & Support</h4>
                        <h4 href="">For all SaaS</h4>
                        <h4 href="">Book Demo</h4>
                    </div></div>
            </li>
        </ul>
    </nav>
);

const AlloyNav = () => {

    const [isOpen, setOpen] = React.useState(false)

    return (

        <nav className="alloy-nav">
            <div>
                <img id="alloy-logo" src='/img/sections/hero/HeadStream/alloyLogos.png' alt='' height={30} />
                <a className="alloy-title" href=""><span>alloy</span></a>
                <a className="menu" href="">
                    <div style={{ display: "inline-block" }} onClick={(e) => {
                        e.preventDefault();
                        setOpen(!isOpen)
                    }}
                    >
                        <span>Products</span>

                    </div>


                </a>
                <a href=""><span>Integrations</span></a>
                <a href=""><span>Recipes</span></a>
                <a href=""><span>Resources</span></a>

            </div>
            <div className="alloy-right-nav">
                <a href=""><span>Book Demo</span></a>
                <a href=""><span>Login</span></a>
                <button>Try it free</button>
            </div>
            {isOpen && (<ProductMenu />)}
        </nav>

    );
};

export default AlloyNav;