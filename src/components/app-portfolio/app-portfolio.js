import "./app-portfolio.css";

const AppPortfolio = () => {
    return (
        <section className="app__portfolio">
            <div className="container__portfolio">
                <h2 className="title__content">
                    <span>Our works</span>
                </h2>
                <div className="grid__container">
                    <img src={require("./foto/bridge@2x.png")} alt="foto1" />

                    <img src={require("./foto/cat.png")} alt="foto2" />

                    <img src={require("./foto/children.png")} alt="foto3" />

                    <img src={require("./foto/train.png")} alt="foto4" />

                    <img src={require("./foto/underground.png")} alt="foto5" />
                </div>
            </div>
        </section>
    );
};
export default AppPortfolio;
