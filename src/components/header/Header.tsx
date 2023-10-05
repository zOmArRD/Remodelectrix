import './header.css'
import {useTranslation} from "react-i18next";

export default function Header() {
    const {t} = useTranslation();

    return (
        <div className="header">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a id={"appLogo"} href="/"
                           className="-m-1.5 p-1.5 text-xs tracking-tight sm:text-2xs text-expand">
                            Remodelectrix
                        </a>
                    </div>
                    <div className="lg:flex lg:flex-1 lg:justify-end text-slide-in">
                        <a href="/whatsapp"
                           className="text-2xs font-semibold leading-6 text-with-underline text-expand">
                            {t('header.contact_us')}
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}
