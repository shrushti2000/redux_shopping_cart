import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { withRouter } from "react-router";
  const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light">
            <Link class="navbar-brand" to="/">Exotic Fashion</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mr-right">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/cart"> <i class="fa fa-shopping-cart" aria-hidden="true"></i><span class="sr-only">(current)</span></Link>
                    </li>
                   
                  
                </ul>
               
            </div>
        </nav>

    )
}
export default withRouter(Navbar);
