import "./style.css";

import Footer from "../../components/Footer/";
import Header from "../../components/Header/";
import Login from "../../components/Login";

function Home() {
  return (
    <>
      <Header
        sideBarItens={[
          {
            icone: "BiHome",
            titulo: "Home",
            link: "",
          },
          {
            icone: "BiCalendarCheck",
            titulo: "Iniciar simulado",
            link: "",
          },
          {
            icone: "BiChevronsLeft",
            titulo: "Item 3",
            link: "",
          },
        ]}
      />
      <Login />
      <Footer />
    </>
  );
}

export default Home;
