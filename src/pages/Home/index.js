import "./style.css";

import Footer from "../../components/Footer/";
import Header from "../../components/Header/";

function Home() {
  return (
    <div>
      <nav>
        <Header sideBarItens={[
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
        ]}/>
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
