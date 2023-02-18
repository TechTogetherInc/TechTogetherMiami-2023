import Landing from "./sections/landing";
import AboutUs from "./sections/about-us";
import Itinerary from "./sections/itinerary";
import FAQ from "./sections/faq";
import Sponsors from "./sections/sponsors";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

import LandingPageBg from "./assets/bg/landing_page.png";

function App() {
    return (
        <>
            <img
                src={`${LandingPageBg}`}
                className="absolute top-0 left-0 h-full min-w-full object-cover z-[-10]"
                style={{ filter: "blur(0px)" }}
            />
            <img
                src={`${LandingPageBg}`}
                className="absolute top-0 left-0 h-full min-w-full object-cover z-[-10]"
                style={{ filter: "blur(4px)" }}
            />
            <Header />
            <main className="mt-[-100px]">
                <Landing />
                {/* <AboutUs />
                <Itinerary />
                <FAQ />
                <Sponsors /> */}
            </main>
            <Footer />
        </>
    );
}

export default App;
