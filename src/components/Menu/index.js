import "./style.css";
import { Link } from "react-router-dom";
import * as Icones from "react-icons/bi";
import React from "react";

function Item({ icone, titulo, link }) {
  return (
    <Link to={link}>
      <li>
        {React.createElement(Icones[icone], { size: 20 })} {titulo}
      </li>
    </Link>
  );
}

function Menu({ itens }) {
  itens = [
    {
      icone: "BiChevronsLeft",
      titulo: "Home",
      link: "",
    },
    {
      icone: "BiChevronsLeft",
      titulo: "Iniciar simulado",
      link: "",
    },
    {
      icone: "BiChevronsLeft",
      titulo: "Iniciar simulado",
      link: "",
    },
  ];

  return (
    <div>
      <ul class="menu">
        {itens.map((item) => (
          <Item icone={item.icone} titulo={item.titulo} link={item.link} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
