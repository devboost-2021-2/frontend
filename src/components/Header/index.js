import "./style.css";
import {BsList} from "react-icons/bs";


function Header() {
    const logged = false;
    return (
        <div class="body">
            <div class="flexbox">
                <a href= "">
                    <BsList size={50}/>
                </a>
                <h1>Nome do site</h1>
            </div>
            <div>
                {
                    logged && (
                        <img src="favicon.ico"/>
                    )
                }
                {
                    !logged && (
                        <>
                        <button>Cadastrar</button>
                        <button>Entrar</button>
                        </>
                    )
                }
                
            </div>
        </div>
    )
}

export default Header;
