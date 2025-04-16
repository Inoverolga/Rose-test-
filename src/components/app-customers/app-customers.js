import "./app-customers.css";

const AppCustomers = () => {
    return (
        <section className="app__customers">
            <div className="container__customers">
                <h2 className="title__content">
                    <span>Our customers</span>
                </h2>
                <div className="wrapper__customers">
                    <img
                        src={require("./logo/logo-first-alliances.png")}
                        alt="1"
                    />

                    <img src={require("./logo/logo-growell.png")} alt="2" />

                    <img
                        src={require("./logo/logo-iec-winter-wolf.png")}
                        alt="3"
                    />
                </div>
            </div>
        </section>
    );
};

export default AppCustomers;
