import { RefObject, useEffect, useRef, useState } from "react";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import linkedinIcon from "../assets/linkedin.png";

export default function Footer() {
    const footer = useRef<HTMLElement>(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(getElementHeight(footer));
    }, [footer]);
    return (
        <footer
            ref={footer}
            className="sticky bottom-0 left-0 w-full text-white bg-[rgba(0,0,0,0.2)] backdrop-blur-md flex justify-between items-center z-[10]"
            style={{ marginTop: `-${height}px` }}>
            <div className="footer-leftside">
                {" "}
                {/* Left Side*/}
                <h2>Contact us</h2>
                <h3>info@techtogether.io</h3>
            </div>
            <div className="footer-rightside">
                {" "}
                {/* Right Side*/}
                <a href="https://www.facebook.com/endthehackergap/">
                    <img src={facebookIcon}></img>
                </a>
                <a href="https://www.linkedin.com/company/techtogether-miami/">
                    <img src={linkedinIcon}></img>
                </a>
                <a href="https://www.instagram.com/techtogethermiami">
                    <img src={instagramIcon}></img>
                </a>
            </div>
        </footer>
    );
}

function getElementHeight(ref: RefObject<HTMLElement>) {
    if (ref === null || ref.current === null) return 0;
    return ref.current.clientHeight;
}
