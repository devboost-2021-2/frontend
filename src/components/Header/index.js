import "./style.css";

import { BiChevronsLeft } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import Menu from "../Menu/";
import { useState, useEffect, useRef } from "react";

function Header({ sideBarItens }) {
  const logged = true;
  const [menu, setMenu] = useState(false);
  const [profile, setProfile] = useState(false);
  let menuRef = useRef();
  let profileRef = useRef();
  let buttonRef = useRef();
  useEffect(() => {
    document.addEventListener(
      "mouseup",
      (event) => {
        if (!menuRef?.current?.contains(event.target)) setMenu(false);
        if (
          !profileRef?.current?.contains(event.target) &&
          !buttonRef?.current?.contains(event.target)
        )
          setProfile(false);
      },
      [menu, profile]
    );
  });
  return (
    <div className="header">
      <nav>
        <div className="flexbox">
          <button
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu && <BiChevronsLeft size={30} viewBox="4 2.5 16 16" />}
            {!menu && <BsList size={30} viewBox="0 -2 16 16" />}
          </button>
          <h1 className="header-h1">Nome do site</h1>
        </div>
        <div>
          {logged && (
            <img
              id="profile"
              ref={buttonRef}
              onClick={() => {
                setProfile(!profile);
              }}
              src="favicon.ico"
              alt="foto de perfil"
            />
          )}
          {!logged && (
            <>
              <button>Cadastrar</button>
              <button>Entrar</button>
            </>
          )}
        </div>
      </nav>
      {menu && <Menu ref={menuRef} itens={sideBarItens} />}
      {profile && (
        <Menu
          ref={profileRef}
          itens={[
            {
              icone: "BiUser",
              titulo: "Perfil",
              link: "",
            },
            {
              icone: "BiCog",
              titulo: "Configurações",
              link: "",
            },
            {
              icone: "BiLogOut",
              titulo: "Sair",
              link: "",
            },
          ]}
          direita={true}
        />
      )}
    </div>
  );
}

export default Header;
