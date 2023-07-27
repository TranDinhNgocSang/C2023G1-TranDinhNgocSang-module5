import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";

function Navbar(){
  const navigate = useNavigate();

  const handelButtonHome = () => {
    navigate("/");
  };

    return(
<header style={{background: 'rgb(250, 242, 236)'}}>
        <div className="header-area">
          <div className="main-header ">
            <div className="header-bottom  header-sticky" style={{background: 'rgb(250, 242, 236)'}}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-1">
                    <div className="logo">
                      <a href="index.html"><img width="50%" src="./assets/img/logo/Furama.png" alt="" /></a>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10">
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li><a style={{fontSize: '22px', textDecoration: 'none'}} onClick={handelButtonHome}>Home</a>
                          </li>
                          <li><a href="about.html" style={{fontSize: '22px', textDecoration: 'none'}}>About
                              US</a></li>
                          <li><a href="packages.html" style={{fontSize: '22px', textDecoration: 'none'}}>Package</a>
                          </li>
                          <li><a href="blog.html" style={{fontSize: '22px', textDecoration: 'none'}}>Blog</a>
                            <ul className="submenu">
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="single-blog.html">Blog Details</a></li>
                            </ul>
                          </li>
                          <li><a href="/#" style={{fontSize: '22px', textDecoration: 'none'}}>Pages</a>
                            <ul className="submenu">
                              <li><a href="elements.html">Element</a></li>
                            </ul>
                          </li>
                          <li><a href="contact.html" style={{fontSize: '22px', textDecoration: 'none'}}>Contract</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Navbar;