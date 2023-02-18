import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Landing() {
    const tilt = useRef(null);

    useEffect(() => {
        if (!tilt.current) return;
        console.log(tilt.current);
        VanillaTilt.init(tilt.current, {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
            "full-page-listening": true,
        });
    }, [tilt.current]);

    return (
        <section className="relative h-screen bg-center bg-cover bg-no-repeat sm:px-20 px-4 sm:pb-20 pb-2 pt-[150px] text-white flex flex-col justify-center items-center">
            <div
                ref={tilt}
                className="min-w-[50%] min-h-[50%] bg-[rgba(0,0,0,0.2)] backdrop-blur-md \
                rounded-3xl sm:p-10 px-2 flex flex-col items-center shadow-[2px_2px_10px_5px_rgba(0,0,0,0.5)] text-center flex flex-col justify-center items-center"
                style={{ wordBreak: "break-word" }}>
                <h1 className="sm:text-6xl text-4xl font-bold">
                    TechTogether Miami
                </h1>
                <p className="sm:text-3xl text-2xl mt-5">
                    TBA Dates, TBA Location
                </p>
                <a
                    href="https://techtogether-miami-2023.devpost.com/"
                    target="_blank"
                    className="mt-10 py-5 px-10 bg-[#f13c9a] rounded-xl text-lg text-white font-bold">
                    Sign up
                </a>
            </div>
        </section>
    );
}
