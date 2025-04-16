import AppHeader from "../app-header/app-header";
import AppAbout from "../app-about/app-about";
import AppPortfolio from "../app-portfolio/app-portfolio";
import AppInsperation from "../app-insperation/app-insperation";
import AppCustomers from "../app-customers/app-customers";
import AppFuter from "../app-footer/app-footar";

function App() {
    return (
        <main className="App">
            <AppHeader />
            <AppAbout />
            <AppPortfolio />
            <AppInsperation />
            <AppCustomers />
            <AppFuter />
        </main>
    );
}

export default App;
