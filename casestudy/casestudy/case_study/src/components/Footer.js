function Footer(){
    return(
        <footer>
        <div className="footer-area footer-padding footer-bg" style={{backgroundImage: 'url(assets/img/service/footer_bg.jpg)'}}>
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>Lorem iaspsum doldfor sit amvset, consectetur adipisicing cvelit csed do eiusmod
                          tempor incididucvccnt ut labovre.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="/#" style={{textDecoration: 'none'}}>About</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}> Offers &amp; Discounts</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}> Get Coupon</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}> Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>New Products</h4>
                    <ul>
                      <li><a href="/#" style={{textDecoration: 'none'}}>Woman Cloth</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}>Fashion Accessories</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}> Man Accessories</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}> Rubber made Toys</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Support</h4>
                    <ul>
                      <li><a href="/#" style={{textDecoration: 'none'}}>Frequently Asked Questions</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}>Terms &amp; Conditions</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}>Privacy Policy</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}>Privacy Policy</a></li>
                      <li><a href="/#" style={{textDecoration: 'none'}}>Report a Payment Issue</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5">
              {/* social */}
              <div className="footer-social f-right">
                <a href="/#"><i className="fab fa-twitter" /></a>
                <a href="/#"><i className="fab fa-facebook-f" /></a>
                <a href="/#"><i className="fab fa-behance" /></a>
                <a href="/#"><i className="fas fa-globe" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;