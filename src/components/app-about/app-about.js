import "./app-about.css";

const AppAbout = () => {
    return (
        <section className="app__about">
            <div className="container">
                <h2 className="about__title">What you can expect from us:</h2>
                <p className="text__about">
                    We prioritize simple and elegant forms, clean colors, and
                    meticulous editing to ensure quality products. With a
                    passion for minimalism, we aim to maximize the impact of
                    visual messages and stories in <span>each photo</span>
                </p>
                <div className="about__services">
                    <div className="all__services">
                        <h3>All services</h3>
                        <ul className="all_serv">
                            <li>
                                Portrait Photography: Individual, Family,
                                Corporate, Creative
                            </li>
                            <li>
                                Commercial Photography: Product, Fashion,
                                Advertising
                            </li>
                            <li>
                                Photo Editing & Retouching: Color correction,
                                Skin retouching, Background removal
                            </li>
                        </ul>
                    </div>
                    <p className="services__text">
                        With a background in training and designing photos for
                        many years, we have a deep understanding of creation art
                        of photo, content handling, and working in black and
                        white style. <br /> Now, we bring that experience for
                        you to create jaw-dropping content with style
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AppAbout;
