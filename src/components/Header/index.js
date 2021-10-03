import "./style.css";
import { BsList } from "react-icons/bs";
import { BiChevronsLeft } from "react-icons/bi";
import { useState } from "react";
import Menu from "../Menu/";

function Header() {
  const logged = false;
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="body">
        <div className="flexbox">
          <button
            onClick={() => {
              setMenu(!menu);
              console.log(menu);
            }}
          >
            {menu && <BiChevronsLeft size={30} viewBox="4 2.5 16 16" />}
            {!menu && <BsList size={30} viewBox="0 -2 16 16" />}
          </button>
          <h1>Nome do site</h1>
        </div>
        <div>
          {logged && <img src="favicon.ico" />}
          {!logged && (
            <>
              <button>Cadastrar</button>
              <button>Entrar</button>
            </>
          )}
        </div>
      </div>
      {menu && <Menu />}
    </>
  );
}

export default Header;
