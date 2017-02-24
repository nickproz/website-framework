# Setup
Use the following commands in your vagrant development environment to get localhost:3000 up and running:
```bash
git clone *this repo*
cd *new directory*
npm install --no-bin-links (--no-bin-links for windows users only)
bower install
gulp
```

# Dependencies
- After running `npm install`, all gulp development packages will be installed.
- After running `bower install`, jQuery, hover, font awesome, and angular will be installed.

# Notes
- `dist/index.html` - this html file is served by default.
- `dist/data/` - all your media files (images, videos, GIFs etc.) go here.
- `src/sass` folder - all sass files here will be compiled to `dist/styles.css`.
- `src/js` folder - all javascript files here will be uglified and put in `dist/script.js`.

**Do not edit `styles.css` and `script.js` in the `dist` folder.** All things there are auto-generated and any changes you make there will get overwritten by Gulp.
