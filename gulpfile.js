`use strict`;

const { src, dest, watch, series } = require(`gulp`);
const plumber = require(`gulp-plumber`);
const sourcemap = require(`gulp-sourcemaps`);
const sass = require(`gulp-sass`);
const postcss = require(`gulp-postcss`);
const autoprefixer = require(`autoprefixer`);
const server = require(`browser-sync`).create();
const csso = require(`gulp-csso`);
const rename = require(`gulp-rename`);
const imagemin = require(`gulp-imagemin`);
const webp = require(`gulp-webp`);
const svgstore = require(`gulp-svgstore`);
const posthtml = require(`gulp-posthtml`);
const include = require(`posthtml-include`);
const concat = require(`gulp-concat`);
const del = require(`del`);
const rollup = require(`gulp-better-rollup`);
const resolve = require(`rollup-plugin-node-resolve`);
const commonjs = require(`rollup-plugin-commonjs`);

const css = () => {
  return src(`source/sass/style.scss`)
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename(`style.min.css`))
    .pipe(sourcemap.write(`.`))
    .pipe(dest(`build/css`))
    .pipe(server.stream());
};

exports.css = css;

const createServer = () => {
  server.init({
    server: `build/`,
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  watch(`source/sass/**/*.{scss,sass}`, series(css));
  watch(`source/img/icon-*.svg`, series(sprite, html, refresh));
  watch(`source/*.html`, series(html, refresh));
  watch(
    [`source/js/main.js`, `source/js/components/**/*.js`],
    series(jsMain, refresh)
  );
  watch(`source/js/vendor.js`, series(jsVendor, refresh));
};

exports.createServer = createServer;

const refresh = (done) => {
  server.reload();
  done();
};

exports.refresh = refresh;

const images = () => {
  return src(`source/img/**/*.{png,jpg,svg}`)
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.svgo(),
      ])
    )

    .pipe(dest(`source/img`));
};

exports.images = images;

const convertWebp = () => {
  return src(`source/img/**/*.{png,jpg}`)
    .pipe(webp({ quality: 90 }))
    .pipe(dest(`source/img`));
};

exports.convertWebp = convertWebp;

const sprite = () => {
  return src(`source/img/{icon-*,logo-*,htmlacademy*}.svg`)
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename(`sprite_auto.svg`))
    .pipe(dest(`build/img`));
};

exports.sprite = sprite;

const html = () => {
  return src(`source/*.html`)
    .pipe(posthtml([include()]))
    .pipe(dest(`build`));
};

exports.html = html;

const copy = () => {
  return src([`source/fonts/**/*.{woff,woff2}`, `source/img/**`, `source//*.ico`], {
      base: `source`,
    })
    .pipe(dest(`build`));
};

exports.copy = copy;

const jsMain = () => {
  return (
    src(`source/js/main.js`)
      .pipe(sourcemap.init())
      .pipe(rollup({}, `iife`))
      .pipe(sourcemap.write(``))
      .pipe(dest(`build/js`))
  );
};

exports.jsMain = jsMain;

const jsVendor = () => {
  return (
    src(`source/js/vendor.js`)
      .pipe(sourcemap.init())
      .pipe(rollup({ plugins: [resolve(), commonjs()] }, `iife`))
      .pipe(sourcemap.write(``))
      .pipe(dest(`build/js`))
  );
};

exports.jsVendor = jsVendor;

const clean = () => {
  return del(`build`);
};

exports.clean = clean;

const build = async () => {
  series(
    clean,
    copy,
    css,
    sprite,
    html,
    jsMain,
    jsVendor
  );
};

exports.build = build;

exports.start = series(
  build,
  createServer
);
