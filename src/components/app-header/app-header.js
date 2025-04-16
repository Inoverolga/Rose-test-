import "./app-header.css";

const AppHeader = () => {
    return (
        <header>
            <section className="app__header">
                <div className="container">
                    <h1 className="title">Monovision Studio</h1>
                    <h2 className="subtitle">
                        Want some style on your photos?
                    </h2>
                    <button className="btn__portfolio">Portfolio</button>
                    <div className="adress__tel">
                        Location:
                        <address>
                            Everton Park, Block 2, Singapore 081002
                        </address>
                        <a href="tel:+6569964725">+6569964725</a>
                    </div>
                </div>
                <ul className="keywords">
                    <li>Landscape</li>
                    <li>Business</li>
                    <li>Vogue</li>
                    <li>Casual</li>
                    <li>Style</li>
                    <li>Pets</li>
                    <li>Industrial</li>
                    <li>Family</li>
                    <li>Company</li>
                    <li>Clothes</li>
                    <li>Design</li>
                    <li>Urban</li>
                    <li>Fashion</li>
                    <li>Portrait</li>
                    <li>Nature</li>
                </ul>
            </section>
        </header>
    );
};
export default AppHeader;
