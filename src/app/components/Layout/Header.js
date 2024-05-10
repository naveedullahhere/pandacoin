import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img className='header-logo' src="/logo-header.png" alt="Panda" />
        </a>
        <button class="d-md-none  headerbtn me-2 tranlateeffect" type="button">Buy Now</button>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Where to buy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Socials</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> Tokenomics</a>
            </li>
          </ul>
        
          <button class="d-md-inline d-none  headerbtn me-2 tranlateeffect" type="button">Buy Now</button>

        </div>
      </div>
    </nav>
  );
};

export default Header;
