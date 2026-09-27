import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h3>MANIQUE MAN</h3>

          <p>
            Style, fashion and inspiration for the modern man.
          </p>

        </div>

        <div className="footer-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms-of-service">
            Terms of Service
          </Link>

          <Link to="/data-deletion">
            Data Deletion
          </Link>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Manique Man. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;