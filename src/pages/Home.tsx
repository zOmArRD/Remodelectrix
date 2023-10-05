import Header from "../components/header/Header.tsx";
import Features from "../components/features/Features.tsx";
import Footer from "../components/footer/Footer.tsx";
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import SpinnerLoader from "../components/loader/SpinnerLoader.tsx";

import image_1 from "../assets/images/1.webp";
import image_2 from "../assets/images/2.webp";
import image_3 from "../assets/images/3.webp";
import image_4 from "../assets/images/4.webp";
import image_5 from "../assets/images/5.webp";
import image_6 from "../assets/images/6.webp";
import image_7 from "../assets/images/7.webp";

export default function Home() {
    const {t} = useTranslation();

    const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetId = 'learn_more';
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
            });
        }
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const images = [
        {
            src: image_1,
            title: "Remodelectrix LLC"
        }, {
            src: image_2,
            title: "Remodelectrix LLC"
        }, {
            src: image_2,
            title: "Remodelectrix LLC"
        }, {
            src: image_3,
            title: "Remodelectrix LLC"
        }, {
            src: image_4,
            title: "Remodelectrix LLC"
        }, {
            src: image_5,
            title: "Remodelectrix LLC"
        }, {
            src: image_6,
            title: "Remodelectrix LLC"
        }, {
            src: image_7,
            title: "Remodelectrix LLC"
        },
    ]

    return (
        <>
            <div className={`loader ${loading ? "fade-in" : "fade-out"}`}>
                <SpinnerLoader/>
            </div>

            <div className={`content ${loading ? "hidden" : "fade-in"}`}>
                <Header/>

                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fbff80] to-[#8bfc89] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="min-w-full overflow-hidden">
                    <div className="px-5 md:px-10">
                        <div className="mx-auto w-full max-w-7xl">
                            <div className="md:pt-36 lg:pt-56 pt-40">
                                <div className="flex-col flex items-center gap-y-20 text-lg">
                                    <div className="flex-col flex min-w-full items-center gap-y-20">
                                        <div className="mb-20 flex-col flex items-center gap-y-10">
                                            <div className="flex-col flex max-w-[800px] items-center gap-y-3">
                                                <h1 id="slogan"
                                                    className="text-center font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
                                                    {t('home.slogan')}
                                                </h1>
                                                <div className="max-w-[600px]">
                                                    <p className="text-center font-normal text-xl sm:text-lg">
                                                        {t('home.slogan_desc')}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-x-6">
                                                <a
                                                    href="/whatsapp"
                                                    className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                >
                                                    {t('home.contact_us')}
                                                </a>
                                                <a
                                                    href="#learn_more"
                                                    className="text-sm font-semibold leading-6 text-with-underline"
                                                    onClick={scrollToSection}
                                                >
                                                    {t('home.learn_more')}
                                                    <span aria-hidden="true">→</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-16 flex-col flex w-full max-w-7xl items-center gap-y-20">
                                        <div className="flex-col flex min-w-full items-center max-[479px]:hidden">
                                            <div
                                                className="flex-row flex min-w-[100vw] items-start justify-center gap-8 max-[479px]:hidden max-[479px]:gap-x-4">
                                                {images.map((image) => (
                                                    <>
                                                        <a className="inline-block h-[460px] w-[460px] max-w-full text-[#d6a701] [box-shadow:rgba(0,_0,_0,_0.1)_0px_2px_12px] transition rounded-xl">
                                                            <img
                                                                loading="lazy"
                                                                src={image.src}
                                                                alt="Remodelectrix LLC"
                                                                className="inline-block h-full w-full max-w-full flex-none object-cover max-[479px]:max-h-[230px] max-[479px]:min-w-[230px] rounded-xl"/>
                                                        </a>
                                                    </>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fbff80] to-[#8bfc89] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <Features/>
                <Footer/>
            </div>
        </>
    )

}
