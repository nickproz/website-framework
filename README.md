# Setup

Use the following commands in your vagrant development environment to get this up and running
```bash
git clone https://github.com/nickproz/website-framework
cd website-framework
npm install --no-bin-links
bower install
gulp
```

- `public/index.html` - this html file is served by default.
- `source_sass` folder - all sass files here will be compiled to `public/css/styles.css`.
- `source_js` folder - all javascript files here will be uglified and put in `public/js/script.js`.
- `public/media` - all your media files (images, videos, GIFs etc.) go here.

**Do not edit anything under the `public\css` and `public\js` folders.** All things there are auto-generated and any changes you make there will get overwritten by Gulp.
