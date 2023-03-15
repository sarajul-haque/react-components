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

        <section>
            <nav>
                <div className="alloy-nav">
                    <img id="alloy-logo" src='/img/sections/hero/HeadStream/alloyLogos.png' alt='' height={30} />
                    <a className="alloy-title" href="">alloy</a>
                    <a className="menu" href="">
                        <div style={{ display: "inline-block" }} onClick={(e) => {
                            e.preventDefault();
                            setOpen(!isOpen)
                        }}
                        >
                            <span>Products</span>
                            {isOpen && (<ProductMenu />)}
                        </div>


                    </a>
                    <a href="">Integrations</a>
                    <a href="">Recipes</a>
                    <a href="">Resources</a>

                </div>
                <div className="alloy-right-nav">
                    <a href="">Book Demo</a>
                    <a href="">Login</a>
                    <button>Try it free</button>
                </div>
            </nav>
            <hr />
        </section>


    );
};

export default AlloyNav;