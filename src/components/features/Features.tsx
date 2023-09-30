import {BriefcaseIcon, BuildingStorefrontIcon, HomeModernIcon} from '@heroicons/react/24/outline'

import image_1 from '../../assets/proofs/photo_5150078208299871094_y.jpg'

const features = [
    {
        name: 'Residenciales',
        description:
            'En Remodelectrix, ofrecemos una amplia gama de servicios eléctricos residenciales. Esto incluye desde la renovación completa de la instalación eléctrica de tu hogar hasta la instalación de sistemas generadores para asegurar el suministro de energía en momentos críticos. También realizamos inspecciones exhaustivas, diseño de iluminación, mantenimiento y actualizaciones de sistemas eléctricos. Adicionalmente, proporcionamos protección contra sobretensiones, sistemas de puesta a tierra y reemplazo o reparación de paneles eléctricos.',
        icon: HomeModernIcon,
    },
    {
        name: 'Comerciales',
        description:
            'Nuestros servicios comerciales se adaptan a las necesidades de tu negocio. Ofrecemos pruebas y resolución de problemas eléctricos para garantizar la seguridad y eficiencia de tus instalaciones. Además, proporcionamos servicios de diseño y mantenimiento de iluminación, incluyendo conversiones a iluminación LED, así como protección contra sobretensiones y sistemas de puesta a tierra. Nos especializamos en renovaciones comerciales, instalación de sistemas generadores, paneles de distribución de energía, adecuación de espacios para inquilinos y colaboración con grupos de gestión de terceros.',
        icon: BuildingStorefrontIcon,
    },
    {
        name: 'Industriales',
        description:
            'En el ámbito industrial, Remodelectrix es tu socio de confianza. Ofrecemos servicios especializados en motores eléctricos y controles de motor, garantizando su correcta operación. También realizamos la instalación de sistemas generadores, implementación de sistemas de puesta a tierra y proporcionamos servicios de diseño y mantenimiento de iluminación industrial. Además, ofrecemos soluciones integrales para paneles de distribución de energía, asegurando la eficiencia y continuidad de tus operaciones industriales.',
        icon: BriefcaseIcon,
    }
]

import './features.css'
import {contactWhatsapp} from "../header/Header.tsx";

export default function Features() {
    return (
        <div className="features py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 t-indigo-600">Excelencia garantizada</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight t-gray-900 sm:text-4xl">
                        Todo lo que necesitas, en un solo lugar
                    </p>
                    <p className="mt-6 text-lg leading-8 t-gray-600">
                        Ofrecemos una gran cantidad de servicios, ya sean residenciales, comerciales o empresariales.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 t-gray-900">
                                    <div
                                        className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 t-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>

            <div id="scard">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                            aria-hidden="true"
                        >
                            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                            <defs>
                                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                    <stop stopColor="#7775D6" />
                                    <stop offset={1} stopColor="#E935C1" />
                                </radialGradient>
                            </defs>
                        </svg>
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                ¿Estás listo?
                                <br />
                                Contáctenos ahora
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Nuestro equipo de expertos está listo para ayudarte. No dudes en ponerte en contacto con nosotros para discutir tus necesidades.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href={contactWhatsapp()}
                                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Contáctenos
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-white">
                                    Saber más <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative mt-16 h-80 lg:mt-8">
                            <img
                                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                                src={image_1}
                                alt="App screenshot"
                                width={1280}
                                height={960}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
