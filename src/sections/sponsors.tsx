import Microsoft from "../assets/microsoft.png";
import Balsamiq from "../assets/balsamiq.png";
import CapitalOne from "../assets/capital_one.png";
import MLH from "../assets/mlh.png";

export default function Sponsors() {
    return (
        <section
            className="bg-gradient-to-b from-[#4c0d4d] to-[#f22d89] flex flex-col items-center \
                            text-white sm:px-40 px-10 py-20 gap-5">
            <h1 className="text-4xl font-semibold my-4">Our Sponsors</h1>
            <div className="h-full flex flex-row flex-wrap gap-20 justify-center">
                {sponsorLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        className="max-h-24 sm:h-32"
                        alt="Sponsor Logo"
                    />
                ))}
            </div>
        </section>
    );
}

const sponsorLogos = [Microsoft, Balsamiq, CapitalOne, MLH];
