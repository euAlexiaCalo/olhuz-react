import LogoOlhuz from "../../assets/logoOlhuz.png";
import { FaRegUser } from "react-icons/fa6";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <a href="#"><img src={LogoOlhuz} alt="Logo Olhuz" /></a>
          <div>
            <a href="#">Olhuz</a>
            <a href="#">A técnologia que ilumina o invisível</a>
          </div>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/recursos">Recursos</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
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
