module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'headerBlue': '#709CA7',
                'bodyBlue': '#ECFBFF',
                'footerBlue': '#344D59',
            },
            boxShadow: {
                'thick': '#242423 6px 6px 0 0',
            },
        },
    },
    plugins: [],
}