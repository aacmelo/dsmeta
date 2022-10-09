import logo from "../../assets/img/logo.svg";
import "./style.css";

function Head() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="mailto:andreaparecidocorreia@gmail.com"> andreaparecidocorreia@gmail.com</a>
                    </p>
                </div>
            </header>
        </>
    )
}
export default Head;