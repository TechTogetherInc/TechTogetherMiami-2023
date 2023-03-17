import TTM_White from "../assets/TTM_white.png";
import MLH_Badge from "../assets/mlh_badge.svg";

export default function Header() {
    return (
        <header className="sticky top-0 left-0 w-full text-white h-[100px] flex z-[10]">
            <nav className="my-auto w-full">
                <ul className="flex justify-between items-center px-10 py-2">
                    <li>
                        <a href="/">
                            <img
                                className="h-[60px] sm:h-20"
                                src={TTM_White}
                                alt="TechTogether Boston"
                            />
                        </a>
                    </li>
                    <a
                        href="https://mlh.io/seasons/2023/events"
                        target="_blank"
                        className="absolute top-0 right-[40px] sm:right-[80px]">
                        <img
                            src={MLH_Badge}
                            className="w-[50px] sm:w-[80px]"
                            alt="MLH Badge"
                        />
                    </a>
                </ul>
            </nav>
        </header>
    );
}
