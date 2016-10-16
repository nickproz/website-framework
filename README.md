# Setup

Use the following commands in your vagrant development environment to get this up and running:
```bash
git clone *this repo*
cd *new directory*
npm install --no-bin-links (no bin links for windows users only)
bower install
gulp
```

- `public/index.html` - this html file is served by default.
- `source_sass` folder - all sass files here will be compiled to `public/css/styles.css`.
- `source_js` folder - all javascript files here will be uglified and put in `public/js/script.js`.
- `public/data/media` - all your media files (images, videos, GIFs etc.) go here.

**Do not edit anything under the `public\css` and `public\js` folders.** All things there are auto-generated and any changes you make there will get overwritten by Gulp.

# Dependencies

After running bower install, Jquery and Angular will be installed.
Optional dependencies installed include: Bootstrap, hover, font awesome, slick, and full page.
