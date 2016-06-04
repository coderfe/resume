# ChenDong's Online Resume

[View my resme](http://coderfe.cn)

## Developing

First of all, you should installed `git`, `nodejs`, `gulpjs`

```shell
git clone https://github.com/coderfe/resume.git
cd resume/
npm install && gulp
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. 

### Building

Now you can edit any file, and the browser will automatic refresh:) Config `gulpfile.js`:

```javascript
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ["browser-sync"]);
```

## Licensing

The code in this project is licensed under [MIT license](https://github.com/coderfe/resume/blob/gh-pages/LICENSE)

