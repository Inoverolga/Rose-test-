import "./app-insperation.css";

const AppInsperation = () => {
    return (
        <section className="app__insperation">
            <div className="container__insperation">
                <h2 className="title__content">
                    <span>Our inspiration</span>
                </h2>

                <div className="grid__container">
                    <img
                        id="man"
                        src={require("./foto-insperation/man (1).png")}
                        alt="man"
                    />

                    <img
                        id="horses"
                        src={require("./foto-insperation/horses (1).png")}
                        alt="horses"
                    />

                    <img
                        id="bridge"
                        src={require("./foto-insperation/bridge (1).png")}
                        alt="bridge"
                    />

                    <img
                        id="cat"
                        src={require("./foto-insperation/cat (3).png")}
                        alt="cat"
                    />

                    <img
                        id="sky"
                        src={require("./foto-insperation/sky (1).png")}
                        alt="sky"
                    />
                    <img
                        id="tenement"
                        src={require("./foto-insperation/tenement (1).png")}
                        alt="tenement"
                    />
                </div>
            </div>
        </section>
    );
};
export default AppInsperation;
