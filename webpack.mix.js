const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('sass/_style.scss', 'dist/style.css')
    .sass('sass/_desktop.scss', 'dist/desktop.css')
    .sass('sass/_helpers.scss', 'dist/helpers.css')
    .sass('sass/_mobile.scss', 'dist/mobile.css')
    .sass('sass/_tablet.scss', 'dist/tablet.css')
    .sass('sass/og.scss', 'dist/')
    .sass('sass/simple.scss', 'dist/')
    .options({
        processCssUrls: false,
        postCss: [
            require('postcss-sorting')({
                'properties-order': 'alphabetical'
            }),
            tailwindcss('tailwind.config.js'),
        ]
    }).setPublicPath('dist');