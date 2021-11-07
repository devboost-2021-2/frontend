import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <ul className="footer">
      <li>
        <Link to="">Política de privacidade </Link>
      </li>

      <li>
        <Link to="">Termos de uso</Link>
      </li>
      <li>
        <Link to="">Quem somos</Link>
      </li>
      <li>
        <Link to="">Colabore</Link>
      </li>
      <li>
        <Link to="">Fale conosco</Link>
      </li>
    </ul>
  );
}

export default Footer;
