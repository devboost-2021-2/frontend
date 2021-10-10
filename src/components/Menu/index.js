import "./style.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul class="menu">
        <Link to="">
          <li>Home</li>
        </Link>
        <Link to="">
          <li>Iniciar simulado</li>
        </Link>
        <Link to="">
          <li>Fórum</li>
        </Link>
        <Link to="">
          <li>Sair</li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
