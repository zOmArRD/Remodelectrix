function getCurrentYear() {
    return new Date().getFullYear() + " ";
}

export default function Footer() {
    return (
        <>
            <div className="relative isolate  px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <footer className=" py-1 sm:py-1">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <span
                                id={"appLogo"}
                                className="self-center text-2xs font-semibold whitespace-nowrap dark:text-white">Remodelectrix</span>
                            </a>
                            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
                                <li>
                                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Acerca de nosotros</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Contacto</a>
                                </li>
                            </ul>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                        <span className="block text-sm sm:text-center">
                        © {getCurrentYear()}
                            <a href="https://flowbite.com/" className="hover:underline">Remodelectrix LLC</a>. All Rights Reserved.</span>
                    </div>
                </footer>
            </div>
        </>
    )
}
