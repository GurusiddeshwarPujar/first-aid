'use client'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <a href="/">
              <img src="/assets/images/first-aid-mc.png" alt="first-aid-mc-logo" />
            </a>
          </div>

          <div className="nav-wrapper">
            <div className="navigation">
              <ul className="nav-list">
                <li className="nav-list-item"><a href="/about-us">About Us</a></li>

                <li className="nav-list-item">
                  <a href="/our-courses">Our Courses</a>
                  <span className="sub-nav-toggler">
                    <i className="bi bi-caret-down-fill"></i>
                  </span>
                  <ul className="sub-nav-list">
                    <li className="sub-nav-list-item"><a href="#">item 1</a></li>
                    <li className="sub-nav-list-item"><a href="#">item 2</a></li>
                    <li className="sub-nav-list-item"><a href="#">item 3</a></li>
                  </ul>
                </li>

                <li className="nav-list-item">
                  <a href="/upcoming-courses">Upcoming Course</a>
                  <span className="sub-nav-toggler">
                    <i className="bi bi-caret-down-fill"></i>
                  </span>
                  <ul className="sub-nav-list">
                    <li className="sub-nav-list-item"><a href="#">item 1</a></li>
                    <li className="sub-nav-list-item"><a href="#">item 2</a></li>
                    <li className="sub-nav-list-item"><a href="#">item 3</a></li>
                  </ul>
                </li>

                <li className="nav-list-item"><a href="/faq">FAQ</a></li>
                <li className="nav-list-item"><a href="/contact">Contact</a></li>
              </ul>

              <div className="header-cta">
                <a href="/login" className="login-btn">Login</a>
                <span>Or</span>
                <a href="/subscribe" className="subscribe-btn">Subscribe</a>
              </div>
            </div>
          </div>

          <div className="mobile-toggler">
            <button className="mobile-toggler-btn">
              <i className="bi bi-list bars"></i>
              <i className="bi bi-x cross"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
