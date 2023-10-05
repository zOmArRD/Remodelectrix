import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

const i18n = i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    header: {
                        contact_us: "Contact Us ",
                    },
                    home: {
                        "about_us": "About Us",
                        "press_here": "Press here",
                        "slogan": "Quality and Commitment is what we stand for",
                        "slogan_desc": "We are remodeling and electrical experts focused on transforming spaces with precision and passion. Every detail counts and we strive to exceed your expectations on every project.",
                        "contact_us": "Contact Us",
                        "learn_more": "See More "
                    },
                    features: {
                        title: "Excellence guaranteed",
                        slogan: "Everything you need, in one place",
                        slogan_desc: "We provide a wide range of services, including residential, commercial, and corporate services.",

                        residential: {
                            name: "Residential",
                            description: "At Remodelectrix, we provide comprehensive residential electrical services, including complete renovation of home electrical systems and installation of generator systems for reliable power during critical times. Our services also encompass inspections, lighting design, maintenance and upgrades for existing electrical systems. Furthermore, we specialize in providing surge protection, grounding systems, and electrical panel replacement or repair."
                        },
                        commercial: {
                            name: "Commercial",
                            description: "Our commercial services are customized to meet the needs of your business. We provide electrical testing and troubleshooting services to secure the safety and efficiency of your facilities. Additionally, we offer maintenance and lighting design services, which include conversions to LED lighting, as well as surge protection and grounding systems. Our specialty lies in commercial renovations, installation of generator systems, power distribution panels, and retrofits of tenant spaces to collaborate with third-party management groups."
                        },
                        industrial: {
                            name: "Industrial",
                            description: "In the industrial sector, Remodelectrix is a trustworthy partner for specialized services in electric motors and motor controls to ensure optimal performance. We provide installation, maintenance, and design services for industrial lighting, grounding systems, and generator systems. Our integral solutions for power distribution panels guarantee efficiency and continuity in your operations."
                        }
                    }
                }
            },
            es: {
                translation: {
                    header: {
                        contact_us: "Contáctenos ",
                    },
                    home: {
                        "about_us": "¿Sobre nosotros?",
                        "press_here": "Presiona aquí",
                        "slogan": "Calidad y Compromiso es nuestro significado",
                        "slogan_desc": "Somos expertos en remodelación y electricidad, enfocados en transformar espacios con precisión y pasión. Cada detalle cuenta, y estamos dedicados a superar tus expectativas en cada proyecto.",
                        "contact_us": "Contáctenos",
                        "learn_more": "Saber más "
                    },
                    features: {
                        title: "Excelencia garantizada",
                        slogan: "Todo lo que necesitas, en un solo lugar",
                        slogan_desc: "Ofrecemos una gran cantidad de servicios, ya sean residenciales, comerciales o empresariales.",

                        residential: {
                            name: "Residencial",
                            description: "En Remodelectrix, ofrecemos una amplia gama de servicios eléctricos residenciales. Esto incluye desde la renovación completa de la instalación eléctrica de tu hogar hasta la instalación de sistemas generadores para asegurar el suministro de energía en momentos críticos. También realizamos inspecciones exhaustivas, diseño de iluminación, mantenimiento y actualizaciones de sistemas eléctricos. Adicionalmente, proporcionamos protección contra sobretensiones, sistemas de puesta a tierra y reemplazo o reparación de paneles eléctricos."
                        },
                        commercial: {
                            name: "Comerciales",
                            description: "Nuestros servicios comerciales se adaptan a las necesidades de tu negocio. Ofrecemos pruebas y resolución de problemas eléctricos para garantizar la seguridad y eficiencia de tus instalaciones. Además, proporcionamos servicios de diseño y mantenimiento de iluminación, incluyendo conversiones a iluminación LED, así como protección contra sobretensiones y sistemas de puesta a tierra. Nos especializamos en renovaciones comerciales, instalación de sistemas generadores, paneles de distribución de energía, adecuación de espacios para inquilinos y colaboración con grupos de gestión de terceros."
                        },
                        industrial: {
                            name: "Industrial",
                            description: "En el ámbito industrial, Remodelectrix es tu socio de confianza. Ofrecemos servicios especializados en motores eléctricos y controles de motor, garantizando su correcta operación. También realizamos la instalación de sistemas generadores, implementación de sistemas de puesta a tierra y proporcionamos servicios de diseño y mantenimiento de iluminación industrial. Además, ofrecemos soluciones integrales para paneles de distribución de energía, asegurando la eficiencia y continuidad de tus operaciones industriales."
                        }
                    }
                }
            }
        }
    });


export default i18n;
