import './spinnerloader.scss'

export default function SpinnerLoader() {
    return (
        <>
            {/*<div className="lcontainer">
                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <circle id="test" cx="40" cy="40" r="32"></circle>
                    </svg>
                </div>

                <div className="loader triangle">
                    <svg viewBox="0 0 86 80">
                        <polygon points="43 8 79 72 7 72"></polygon>
                    </svg>
                </div>

                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <rect x="8" y="8" width="64" height="64"></rect>
                    </svg>
                </div>

                <a id="appLogo" className="dribbble text-2xs sm:text-lg">
                    Remodelectrix
                </a>
            </div>*/}
            <div className="loading">
                <div className="loading-text">
                    <span className="loading-text-words">R</span>
                    <span className="loading-text-words">E</span>
                    <span className="loading-text-words">M</span>
                    <span className="loading-text-words">O</span>
                    <span className="loading-text-words">D</span>
                    <span className="loading-text-words">E</span>
                    <span className="loading-text-words">L</span>
                    <span className="loading-text-words">E</span>
                    <span className="loading-text-words">C</span>
                    <span className="loading-text-words">T</span>
                    <span className="loading-text-words">R</span>
                    <span className="loading-text-words">I</span>
                    <span className="loading-text-words">X</span>
                </div>
            </div>
        </>
    );
}
