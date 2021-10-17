import "./style.css";

import { BiChevronsLeft } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import Menu from "../Menu/";
import { useState, useEffect, useRef } from "react";

function Header({ sideBarItens }) {
  const logged = false;
  const [menu, setMenu] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
      document.addEventListener("mouseup", (event)=>{
        if (!menuRef?.current?.contains(event.target)) setMenu(false);
      }, [])
    }
  )
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
          {logged && <img src="favicon.ico" alt="foto de perfil" />}
          {!logged && (
            <>
              <button>Cadastrar</button>
              <button>Entrar</button>
            </>
          )}
        </div>
      </div>
      {menu && <Menu ref={menuRef} itens={sideBarItens} />}
    </>
  );
}

export default Header;
