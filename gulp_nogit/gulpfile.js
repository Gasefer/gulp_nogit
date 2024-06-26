(() => {
  "use strict";
  const { dependencies } = require("./package.json");

  const gulp = require("gulp"),
    rigger = require("gulp-include"),
    rename = require("gulp-rename"),
    fileInclude = require("gulp-file-include"),
    prefixer = require("gulp-autoprefixer"),
    sass = require("gulp-sass")(require("sass")),
    cssmin = require("gulp-cssmin"),
    // uglify = require('gulp-uglify'),
    uglify = require("gulp-terser"),
    uglifyEs = require("gulp-uglify-es").default,
    imagemin = require("gulp-imagemin"),
    pngquant = require("imagemin-pngquant"),
    spritesmith = require("gulp.spritesmith"),
    connect = require("gulp-connect"),
    opn = require("opn"),
    rimraf = require("rimraf"),
    svgSprite = require("gulp-svg-sprite"),
    cheerio = require("gulp-cheerio"),
    replace = require("gulp-replace"),
    plumber = require("gulp-plumber"),
    filter = require("gulp-filter"),
    inlinesource = require("gulp-inline-source"),
    imgRetina = require("gulp-img-retina"),
    htmlmin = require("gulp-htmlmin"),
    csso = require("gulp-csso"),
    ftp = require("vinyl-ftp"),
    gutil = require("gulp-util"),
    zip = require("gulp-zip"),
    useref = require("gulp-useref"),
    sourcemaps = require("gulp-sourcemaps"),
    env = require("gulp-env"),
    gulpif = require("gulp-if"),
    arg = ((argList) => {
      if (argList !== undefined) {
        let arg = {},
          a,
          opt,
          thisOpt,
          curOpt;
        for (a = 0; a < argList.length; a++) {
          thisOpt = argList[a].trim();
          opt = thisOpt.replace(/^\-+/, "");

          if (opt === thisOpt) {
            if (curOpt) arg[curOpt] = opt;
            curOpt = null;
          } else {
            curOpt = opt;
            arg[curOpt] = true;
          }
        }
        return arg;
      }
      return false;
    })(process.argv),
    buildpath = "build",
    testpath = "test",
    appPath = "app/",
    path = {
      build: {
        html: buildpath + "/",
        js: buildpath + "/js/",
        css: buildpath + "/css/",
        img: buildpath + "/img/",
        fonts: buildpath + "/fonts/",
        vendor: buildpath + "/vendor/",
        smtp: buildpath + "/smtp/",
        media: buildpath + "/media/",
      },
      test: {
        html: testpath + "/",
        img: testpath + "/img/",
        fonts: testpath + "/fonts/",
        css: testpath + "/css/",
        js: testpath + "/js/",
        smtp: testpath + "/smtp/",
        media: testpath + "/media/",
      },
      src: {
        html: "src/pages/*.html",
        js: "src/js/script.js",
        style: "src/sass/style.scss",
        img: "src/img/work/**/*.*",
        imgicons: "src/img/icons/*.png",
        svgicons: "src/img/icons/*.svg",
        fonts: "src/fonts/**/*.*",
        vendor: Object.keys(dependencies).map(
          (dependency) => `./node_modules/${dependency}`
        ),
        // bower: 'bower_components/**/*.*',
        path_sasspartials: "src/sass/partials/",
        path_sasstemplates: "src/sass/templates/",
        path_img: "src/img/work/",
        path_smtp: "smtp/**/*.*",
        path_media: "src/media/**/*.*",
      },
      watch: {
        html: "src/pages/**/*.html",
        // bower: 'bower_components/**/*.*',
        // vendor: Object.keys(dependencies).map(el => `node_modules/${el}/*.*`),
        js: "src/js/**/*.js",
        style: "src/sass/**/*.scss",
        img: [
          "src/img/**/*.*",
          "!src/img/work/icons.png",
          "!src/img/work/icons.svg",
        ],
        fonts: "src/fonts/**/*.*",
        smtp: "smtp/**/*.*",
      },
      clean: "./build",
      cleanTest: "./test",
    },
    server = {
      host: "localhost",
      port: "2288",
    },
    retinaOpts = {};
  function openbrowser(done) {
    opn("http://" + server.host + ":" + server.port + "/" + buildpath);
    done();
  }

  function webserver(done) {
    connect.server({
      host: server.host,
      port: server.port,
      livereload: true,
    });
    done();
  }

  function htmlBuild(done) {
    gulp
      .src(path.src.html)
      .pipe(rigger())
      .pipe(fileInclude())
      .pipe(gulpif(arg.retina, imgRetina(retinaOpts)))
      .pipe(gulp.dest(path.build.html))
      .pipe(connect.reload());
    done();
  }

  function jsBuild(done) {
    gulp
      .src(path.src.js)
      .pipe(rigger())
      .pipe(gulp.dest(path.build.js))
      .pipe(connect.reload());
    done();
  }

  function styleBuild(done) {
    gulp
      .src(path.src.style)
      .pipe(plumber())
      .pipe(sass())
      .pipe(prefixer())
      .pipe(gulp.dest(path.build.css))
      .pipe(connect.reload());
    done();
  }

  function imageBuild(done) {
    gulp
      .src(path.src.img)
      .pipe(plumber())
      .pipe(
        gulpif(
          "!*.svg",
          imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true,
          })
        )
      )
      .pipe(gulp.dest(path.build.img))
      .pipe(connect.reload());
    done();
  }

  function sprite(done) {
    const spriteData = gulp.src(path.src.imgicons).pipe(
      spritesmith({
        imgName: "icons.png",
        cssName: "icons.scss",
        algorithm: "binary-tree",
        cssFormat: "css",
        cssTemplate: "css_template_icons.css.mustache",
      })
    );

    spriteData.img.pipe(gulp.dest(path.src.path_img));
    spriteData.css.pipe(gulp.dest(path.src.path_sasspartials));
    done();
  }

  function svgSpriteBuild(done) {
    gulp
      .src(path.src.svgicons)
      .pipe(plumber())
      .pipe(
        cheerio({
          run: function ($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: { xmlMode: true },
        })
      )
      .pipe(replace("&gt;", ">"))
      .pipe(
        svgSprite({
          mode: {
            symbol: {
              sprite: "../sprite.svg",
              render: {
                scss: {
                  dest:
                    "../../../../" +
                    path.src.path_sasspartials +
                    "svg_sprite.scss",
                  template: "css_template_svg_icons.mustache",
                },
              },
            },
          },
        })
      )
      .pipe(gulp.dest(path.src.path_img));
    done();
  }

  function fontsBuild(done) {
    gulp.src(path.src.fonts).pipe(gulp.dest(path.build.fonts));
    done();
  }

  function vendorBuild(done) {
    for (let dependency in dependencies) {
      const mfilter = filter([
          "**/*.*",
          "!**/src/**/*.*",
          "!**/*.json",
          "!**/.gitignore",
          "!**/*Gulpfile.js",
          "!**/*.md",
          "!**/*.json",
          "!**/.jshintrc",
          "!**/*.txt",
          "!**/*.psd",
          "!**/*.scss",
          "!**/*.sass",
          "!**/*.less",
          "!**/*.map",
          "!**/*.md",
        ]),
        cssfilter = filter(["**/*.css"], { restore: true });
      const sourcePath = `node_modules/${dependency}/**/*.*`;

      gulp
        .src(sourcePath)
        .pipe(cssfilter)
        .pipe(cssfilter.restore)
        .pipe(mfilter)
        .pipe(gulp.dest(path.build.vendor + dependency));
    }
    done();
  }

  function smtpBuild(done) {
    const mfilter = filter(["**/*.*"]);
    gulp.src("smtp/.env.example").pipe(gulp.dest(path.build.smtp));

    gulp.src(path.src.path_smtp).pipe(mfilter).pipe(gulp.dest(path.build.smtp));
    done();
  }

  function watch(done) {
    gulp.watch(path.watch.html, htmlBuild);
    gulp.watch(path.watch.js, jsBuild);
    gulp.watch(path.watch.img, imageBuild);
    gulp.watch(path.watch.img, sprite);
    gulp.watch(path.watch.img, svgSpriteBuild);
    gulp.watch(path.watch.fonts, fontsBuild);
    // gulp.watch(path.watch.vendor, vendorBuild);
    gulp.watch(path.watch.style, styleBuild);
    gulp.watch(path.watch.smtp, smtpBuild);
    done();
  }

  function mediaBuild(done) {
    gulp.src(path.src.path_media).pipe(gulp.dest(path.build.media));
    done();
  }

  function testBuild(done) {
    gulp
      .src(path.build.html + "*.html")
      .pipe(
        gulpif(
          arg.nocache,
          replace('<meta http-equiv="Cache-Control" content="no-cache">', "")
        )
      )
      .pipe(gulpif(arg.nodefer, replace('<noscript id="deferred-styles">', "")))
      .pipe(gulpif(arg.nodefer, replace("</noscript>", "")))
      .pipe(gulpif(arg.noinline, replace(" inline", "")))
      .pipe(useref())
      .pipe(gulpif(arg.sourcemaps, sourcemaps.init()))
      .pipe(gulpif(!arg.noinline, inlinesource()))
      .pipe(gulpif("*.css", csso()))
      .pipe(gulpif("*.css", cssmin()))
      .pipe(gulpif("*.js", uglify()))
      .pipe(
        gulpif(
          !arg.nohtmlmin,
          gulpif(
            "*.html",
            htmlmin({
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              minifyCSS: true,
              minifyJS: true,
            })
          )
        )
      )
      .pipe(gulpif(arg.sourcemaps, sourcemaps.write()))
      .pipe(gulp.dest(path.test.html));

    gulp.src(path.build.img + "**/*.*").pipe(gulp.dest(path.test.img));

    gulp.src(path.build.fonts + "**/*.*").pipe(gulp.dest(path.test.fonts));

    gulp.src(path.build.smtp + "**/*.*").pipe(gulp.dest(path.test.smtp));

    gulp.src(path.build.media + "**/*.*").pipe(gulp.dest(path.test.media));

    gulp.src(path.build.css + "**/*.*").pipe(gulp.dest(path.test.css));

    gulp.src(path.build.js + "**/*.*").pipe(gulp.dest(path.test.js));

    gulp
      .src(path.build.css + "**/*.*")
      .pipe(gulpif("*.css", csso()))
      .pipe(gulpif("*.css", cssmin()))
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(path.test.css));

    gulp
      .src(path.build.js + "**/*.*")
      // .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif("*.js", uglifyEs()))
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(path.test.js));
    done();
  }

  function cleanDir(done) {
    rimraf(path.clean, done);
    rimraf(path.cleanTest, done);
    done();
  }

  exports.build = gulp.series(
    cleanDir,
    imageBuild,
    sprite,
    svgSpriteBuild,
    fontsBuild,
    vendorBuild,
    jsBuild,
    styleBuild,
    smtpBuild,
    mediaBuild,
    htmlBuild
  );

  exports.zip = (done) => {
    rimraf(appPath, done);
    gulp
      .src([
        "!node_modules",
        "!node_modules/**",
        // '!bower_components',
        // '!bower_components/**',
        "!test",
        "!test/**",
        "!build",
        "!build/**",
        "!.vscode",
        "!.vscode/**",
        "!.idea",
        "!.idea/**",
        "!app",
        "!app/**",
        "!.git",
        "!.git/**",
        "./**",
        ".gitignore",
        ".env.example.json",
      ])
      .pipe(zip("app.zip"))
      .pipe(gulp.dest(appPath));
    done();
  };

  exports.deploy = (done) => {
    env({
      file: ".env",
    });

    let path = process.env.APP_ENV === "prod" ? buildpath : testpath,
      conn = ftp.create({
        host: process.env.FTP_HOST,
        port: process.env.FTP_PORT,
        user: process.env.FTP_LOGIN,
        password: process.env.FTP_PASS,
        parallel: process.env.FTP_PARALLEL,
        log: gutil.log,
      }),
      globs = [path + "/**/*.*"];

    gulp
      .src(globs, { base: "./" + path, buffer: false })
      .pipe(conn.newer(process.env.FTP_DIR))
      .pipe(conn.dest(process.env.FTP_DIR));

    done();
  };

  exports.test = gulp.series(testBuild);

  exports.server = gulp.series(htmlBuild, watch, webserver, openbrowser);

  exports.default = gulp.series(htmlBuild, watch, webserver, openbrowser);
})();
