import "../Styles/SplashScreen.css";
import logoImg from "../assets/logo.png";

export default function SplashScreen() {
    return (
        <div className="splash-screen">

            <div className="splash-bg-text">
                GREENALI
            </div>

            <div className="splash-line splash-line-left"></div>
            <div className="splash-line splash-line-right"></div>

            <div className="splash-center">

                <img
                    src={logoImg}
                    alt="Greenali Solar"
                    className="splash-logo"
                />

                <h1 className="loader-logo">
                    <span>G</span>
                    <span>R</span>
                    <span>E</span>
                    <span>E</span>
                    <span>N</span>
                    <span>A</span>
                    <span>L</span>
                    <span>I</span>
                </h1>

                <h2 className="solar-text">
                    SOLAR
                </h2>

                <div className="splash-loader">
                    <div></div>
                </div>

                <p>
                    Powering A Bill-Free Future
                </p>

            </div>

        </div>
    );
}