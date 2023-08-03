import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";

function Navbar(){
  const navigate = useNavigate();

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
                          <li><Link to={"/"} style={{fontSize: '22px', textDecoration: 'none'}} >Service</Link></li>
                          <li><Link to={"/customer"} style={{fontSize: '22px', textDecoration: 'none'}}>Customer</Link></li>
                          <li><Link to={"/contract"} style={{fontSize: '22px', textDecoration: 'none'}} >Contract</Link>
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