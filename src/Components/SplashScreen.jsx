import "../Styles/SplashScreen.css";
import logoImg from "../assets/logo.png";

export default function SplashScreen() {
    return (
        <div className="splash-screen">
            <div className="splash-left-panel"></div>
            <div className="splash-right-panel"></div>

            <div className="splash-center">
                <img src={logoImg} alt="Greenali Solar" className="splash-logo" />

                <h1 className="splash-title">
                    GREENALI
                    <span>SOLAR</span>
                </h1>

                <div className="splash-line"></div>

                <p className="splash-text">
                    Zero Electricity Bills • Clean Energy • Smart Solar
                </p>
            </div>
        </div>
    );
}