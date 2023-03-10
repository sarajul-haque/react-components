import React from "react";
import "./AlloyNav.css"

const AlloyNav = () => {

    return (

       <section>
         <nav className="alloy-nav">
            <div>
                <h1>alloy</h1>
                <ul>
                    <a>Products</a> <select></select>
                </ul>
                <ul>
                    <a>Integrations</a>
                </ul>
                <ul>
                    <a>Recipes</a>
                </ul>
                <ul>
                    <a>Resources</a> <select></select>
                </ul>
            </div>
            <div>
                <ul>
                    <a>Book Demo</a>
                </ul>
                <ul>
                    <a>Login</a>
                </ul>
                <ul>
                    <a>Try it free</a> <select></select>
                </ul>
            </div>
        </nav>
       </section>
    )
}

export default AlloyNav;