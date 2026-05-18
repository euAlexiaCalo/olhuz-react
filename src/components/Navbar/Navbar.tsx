import LogoOlhuz from "../../assets/logoOlhuz.png";
import { FaRegUser } from "react-icons/fa6";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <Link to="/"><img src={LogoOlhuz} alt="Logo Olhuz" /></Link>
          <div>
            <Link to="/" className="navbar-logo-title">Olhuz</Link>
            <span className="navbar-subtitle">A tecnologia que ilumina o invisível</span>
          </div>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/funcionalidades">Funcionalidades</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </ul>
            <Link to="/login">
              <FaRegUser className="navbar-login" />
            </Link>
      </div>
    </nav>
  );
}

export default Navbar;
