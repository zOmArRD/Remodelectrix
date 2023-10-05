import {FaFacebook, FaPhone, FaWhatsapp} from "react-icons/fa";
import './footer.css'
import {GoLocation} from "react-icons/go";

function getCurrentYear() {
    return new Date().getFullYear() + " ";
}

export default function Footer() {
    return (
        <>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <footer>
                        <div className="container px-6 py-8 mx-auto">
                            <div className="flex flex-col items-center text-center">
                                <a id={"appLogo"} href="/"
                                   className="-m-1.5 p-1.5 text-xs text-expand tracking-tight sm:text-lg">
                                    Remodelectrix
                                </a>


                                {/*<div className="flex flex-wrap justify-center mt-6 -mx-4">
                                    <a href="{{ url('/dashboard') }}"
                                       className="mx-4 text-sm t-gray-300 transition-colors duration-300 hover:text-green-500"
                                       aria-label="Reddit"> Panel </a>
                                    <a href="{{ url('/soon') }}"
                                       className="mx-4 text-sm t-gray-300 transition-colors duration-300 hover:text-green-500"
                                       aria-label="Reddit"> Equipo </a>
                                    <a href="{{ url('/soon') }}"
                                       className="mx-4 text-sm t-gray-300 transition-colors duration-300 hover:text-green-500"
                                       aria-label="Reddit"> Privacidad </a>
                                </div>*/}
                            </div>

                            <div className="my-6 md:my-10 flex flex-col sm:flex-row sm:justify-between">
                                <div className="flex -mx-2 items-center text-center">
                                    <GoLocation/>
                                    <p>140 NW Adairsville, Georgia 30103, EE. UU.</p>
                                </div>

                                <div className="flex -mx-2 items-center text-center">
                                    <FaPhone/>
                                    <p> +1 (470) 334-8648</p>
                                </div>
                            </div>


                            <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700"/>

                            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                                <a className="text-sm t-gray-300" href="/">
                                    <p>© {getCurrentYear()} Remodelectrix, LLC.</p>
                                </a>

                                <div className="flex -mx-2">
                                    <a href="/facebook"
                                       className="mx-2 t-gray-300 transition-colors duration-300 hover:text-blue-500"
                                       aria-label="Github">
                                        <FaFacebook/>
                                    </a>
                                    <a href="/whatsapp"
                                       className="mx-2 t-gray-300 transition-colors duration-300 hover:text-green-500"
                                       aria-label="Whatsapp">
                                        <FaWhatsapp/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
