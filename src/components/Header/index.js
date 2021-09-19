import "./style.css";

function Header() {
    return (
        <div class="body">
            <div class="flexbox">
                <img src="/favicon.ico" alt="menu"/>
                <h1>Nome do site</h1>
            </div>
            <div>
                <button>Cadastrar</button>
                <button>Entrar</button>
            </div>
        </div>
    )
}

export default Header;
