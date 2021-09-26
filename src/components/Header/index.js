import "./style.css";
import {BsList} from "react-icons/bs";
import {BiChevronsLeft} from "react-icons/bi";


function Header() {
    let menu = true;
    const logged = false;
    return (
        <div class="body">
            <div class="flexbox">
                <button onclick={
                    () => {
                        menu = !menu
                        console.log(menu)
                    }
                }>
                    {
                        menu && <BiChevronsLeft size={50}/>
                    }
                    {
                        !menu && <BsList size={50}/>
                    }
                </button>
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
