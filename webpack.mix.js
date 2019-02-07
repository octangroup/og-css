const mix = require('laravel-mix');

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

mix.sass('sass/style.scss', 'dist/')
    .sass('sass/desktop.scss', 'dist/')
    .sass('sass/helpers.scss', 'dist/')
    .sass('sass/mobile.scss', 'dist/')
    .sass('sass/tablet.scss', 'dist/')
    .options({
        processCssUrls: false,
        postCss: [
            require('postcss-sorting')({
                'properties-order': 'alphabetical'
            })
        ]
    })
    .version();
