import React from "react"

function Header(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand p-4" href="#">GymHub</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item p-4">
                                    <a class="nav-link" style={{fontWeight:700}} href="#">Home</a>
                                </li>
                                <li class="nav-item p-4">
                                    <a class="nav-link" style={{fontWeight:700}} href="#">About</a>
                                </li>
                                <li class="nav-item p-4">
                                    <a class="nav-link" style={{fontWeight:700}} href="#">Course</a>
                                </li>
                                <li class="nav-item p-4">
                                    <a class="nav-link" style={{fontWeight:700}} href="#">Pricing</a>
                                </li>
                                <li class="nav-item p-4">
                                    <a class="nav-link" style={{fontWeight:700}} href="#">Gallery</a>
                                </li>
                                <li class="nav-item p-4">
                                    <a class="nav-link" style={{fontWeight:700}} href="#">Login/Register</a>
                                </li>
                                <li class="nav-item p-4">
                                    <a class="nav-link" style={{fontWeight:700}} href="#">BMI Calculator</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;