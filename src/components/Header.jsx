import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">

      <div className="header-container">

        <Link to="/" className="logo">
          MANIQUE MAN
        </Link>

        <nav className="navigation">

          <Link to="/">
            Home
          </Link>

          <Link to="/privacy-policy">
            Privacy Policy
          </Link>

          <Link to="/terms-of-service">
            Terms
          </Link>

          <Link to="/data-deletion">
            Data Deletion
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Header;