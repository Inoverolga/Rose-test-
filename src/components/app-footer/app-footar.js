import "./app-footer.css";

const AppFuter = () => {
    return (
        <footer className="app__footer">
            <ul className="footer__social">
                <li>
                    <a href="0">
                        <img
                            src={require("./loco-social/facebook.png")}
                            alt="facebook link"
                        />
                    </a>
                </li>
                <li>
                    <a href="0">
                        <img
                            src={require("./loco-social/tg.png")}
                            alt="tg link"
                        />
                    </a>
                </li>
                <li>
                    <a href="0">
                        <img
                            src={require("./loco-social/whatsapp.png")}
                            alt="whatsapp"
                        />
                    </a>
                </li>
            </ul>
            <address>Everton Park, Block 2, Singapore 081002</address>
            <a className="footer__tel" href="tel:+6569964725">
                +6569964725
            </a>
        </footer>
    );
};

export default AppFuter;
