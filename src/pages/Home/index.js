import Footer from "../../components/Footer/";
import Header from "../../components/Header/";

function Home() {
  return (
    <div>
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
      <Footer />
    </div>
  );
}

export default Home;
