import './header.css'
import {contactWhatsapp} from "../../utils.tsx";


export default function Header() {
    return (
        <div className="header">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a id={"appLogo"} href="#" className="-m-1.5 p-1.5 text-xs tracking-tight sm:text-xs">
                            Remodelectrix
                        </a>
                    </div>
                    <div className="lg:flex lg:flex-1 lg:justify-end">
                        <a href={contactWhatsapp()} className="text-2xs font-semibold leading-6">
                            Contáctenos <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
