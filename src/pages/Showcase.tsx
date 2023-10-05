import Header from "../components/header/Header.tsx";
import Footer from "../components/footer/Footer.tsx";

import image_1 from "../assets/images/1.webp";
import image_2 from "../assets/images/2.webp";
import image_3 from "../assets/images/3.webp";
import image_4 from "../assets/images/4.webp";
import image_5 from "../assets/images/5.webp";
import image_6 from "../assets/images/6.webp";
import image_7 from "../assets/images/7.webp";
import image_8 from "../assets/images/8.webp";
import image_9 from "../assets/images/9.webp";
import image_10 from "../assets/images/10.webp";
import image_11 from "../assets/images/11.webp";
import image_12 from "../assets/images/12.webp";
import image_13 from "../assets/images/13.webp";
import image_14 from "../assets/images/14.webp";
import image_15 from "../assets/images/15.webp";
import image_16 from "../assets/images/16.webp";
import image_17 from "../assets/images/17.webp";
import {useTranslation} from "react-i18next";

const images = [{
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
}, {
    src: image_7
}, {
    src: image_8
}, {
    src: image_9
}, {
    src: image_10
}, {
    src: image_11
}, {
    src: image_12
}, {
    src: image_13
}, {
    src: image_14
}, {
    src: image_15
}, {
    src: image_16
}, {
    src: image_17
}]

export default function Showcase() {
    const {t} = useTranslation();

    return (
        <>
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
                                        <p className="t-gray-300 max-[479px]:text-sm">
                                            {t('home.our_work_desc')}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="mb-8 grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-12 md:grid-cols-3 lg:mb-16 lg:gap-8">
                                    {images.map((image) => (
                                        <>
                                            <a className="img-showcase flex max-w-full grid-cols-1 flex-col gap-4 rounded-md border border-[#cdcdcd] bg-white p-4 text-black max-[991px]:text-left max-[767px]:items-center max-[479px]:w-full max-[479px]:pt-4 md:p-0">
                                                <img
                                                    src={image.src}
                                                    alt=""
                                                    className="inline-block h-60 w-full max-w-full object-cover"
                                                />
                                            </a>
                                        </>
                                    ))}
                                </div>
                                <a href="/whatsapp"
                                   className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    {t('home.contact_us')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <Footer/>
        </>
    )
}
