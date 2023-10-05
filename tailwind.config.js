/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./public/js/def.js", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", 'node_modules/preline/dist/*.js',],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin'), require('preline/plugin')]
}
