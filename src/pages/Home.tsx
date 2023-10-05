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
import {CgFacebook} from "react-icons/cg";


export default function Home() {
    const {t} = useTranslation();

    const scrollToSectionLearnMore = (event: React.MouseEvent<HTMLAnchorElement>) => {
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
            src: image_1
        }, {
            src: image_2
        }, {
            src: image_3
        }, {
            src: image_4
        }, {
            src: image_5
        }, {
            src: image_6
        }
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
                                                    onClick={scrollToSectionLearnMore}
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

                <section id="contact" className="features pb-36 sm:pb-60 dark:bg-gray-900">
                    <div className="container px-6 py-12 mx-auto">
                        <div className="text-center">
                            <p className="font-medium t-green-600 dark:text-blue-400">
                                {t('home.contact_us')}
                            </p>

                            <h1 className="mt-2 text-2xl font-semibold t-gray-900 md:text-3xl">
                                {t('home.get_in_touch')}
                            </h1>

                            <p className="mt-3 t-gray-600">
                                {t('home.get_in_touch_desc')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                            <div className="flex flex-col items-center justify-center text-center">
                                <span className="p-3 text-black bg-white rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path
                                        strokeLinecap="round" strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                                </span>

                                <h2 className="mt-4 text-lg font-medium t-gray-900">
                                    {t('home.email')}
                                </h2>
                                <p className="mt-2 t-gray-900">
                                    {t('home.email_desc')}
                                </p>
                                <a
                                    className="mt-2 t-green-600 dark:text-blue-400"
                                    href="mailto:contact@remodelectrix.com"
                                >
                                    contact@remodelectrix.com
                                </a>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                                <span className="p-3 text-black bg-white rounded-full">
                                    <CgFacebook/>
                                </span>

                                <h2 className="mt-4 text-lg font-medium t-gray-900">
                                    Facebook
                                </h2>
                                <p className="mt-2 t-gray-900">
                                    {t('home.facebook_follow')}
                                </p>
                                <a
                                    href="/facebook"
                                    className="mt-2 t-green-600">
                                    Remodelectrix LLC
                                </a>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center">
                                <span className="p-3 text-black bg-white rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor" className="w-6 h-6"
                                    >
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                                </svg>
                                </span>

                                <h2 className="mt-4 text-lg font-medium t-gray-900">
                                    {t('home.phone_whatsapp')}
                                </h2>
                                <p className="mt-2 t-gray-900">
                                    {t('home.phone_whatsapp_desc')}
                                </p>
                                <a
                                    href="tel:+1-470-334-8648"
                                    className="mt-2 t-green-600 dark:text-blue-400"
                                >
                                    +1 (470) 334-8648
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="block">
                    <div className="px-5 md:px-10">
                        <div className="mx-auto w-full max-w-7xl">
                            <div className="py-16 md:py-24 lg:py-32">
                                <div className="flex flex-col items-center">
                                    <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
                                        <h2 className="text-3xl font-bold md:text-5xl">
                                            {t('home.our_work_title')}
                                        </h2>
                                        <div className="mx-auto mt-4 max-w-[528px]">
                                            <p className="text-[#636262] max-[479px]:text-sm">
                                                {t('home.our_work_desc')}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="mb-8 grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 lg:mb-16 lg:gap-8">
                                        {images.map((image) => (
                                            <>
                                                <a href="/showcase"
                                                   className="img-showcase flex max-w-full grid-cols-1 flex-col gap-4 rounded-md border border-[#cdcdcd] bg-white p-4 text-black max-[991px]:text-left max-[767px]:items-center max-[479px]:w-full max-[479px]:pt-4 md:p-0">
                                                    <img
                                                        src={image.src}
                                                        alt=""
                                                        className="inline-block h-60 w-full max-w-full object-cover"/>
                                                </a>
                                            </>
                                        ))}
                                    </div>
                                    <a href="/showcase"
                                       className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        {t('home.our_work_see_more')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        </>
    )

}
