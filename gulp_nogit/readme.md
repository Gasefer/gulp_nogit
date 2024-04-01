# gulp "Start project" ITSPACE
Сборка gulp

### Установка

```bash
$ npm i
```

### или

```bash
$ npm i -g
```
```bash
$ npm link gulp gulp-uglify-es gulp-rename gulp-file-include gulp-env gulp-util vinyl-ftp gulp-sourcemaps gulp-zip gulp-useref gulp-htmlmin gulp-csso gulp-img-retina gulp-if gulp-inline-source gulp-autoprefixer gulp-connect gulp-cssmin gulp-filter gulp-imagemin gulp-sass gulp-livereload gulp-include gulp-uglify gulp.spritesmith gulp-svg-sprite gulp-cheerio gulp-replace gulp-plumber imagemin-pngquant opn rimraf sass@~1.32.12
```

#### Скопируйте .env.example.json в .env.json внесите настройки хостинга

#### Команды генерации кода

```bash
$ gulp build 
$ gulp test
$ gulp server
```
#### для включение режима Retina использовать параметр --retina

### Тестирование
#### для включения режима мапирования использовать параметр --sourcemaps
#### для отключения режима кеширования использовать параметр --nocache
#### для отключения режима защиты стилей и скриптов использовать параметр --noinline
#### для отключения режима защиты разметки использовать параметр --nohtmlmin
#### для отключения режима отложенной загрузки стилей использовать параметр --nodefer
<!-- 
#### Bower

```bash
$ bower i
```

Установщик bower нужно запускать из корня, устанавливаться пакеты будут в `bower_components`, а компелироваться в `"build/vendor"` -->

### Структура проекта
```
src/fonts - шрифты
src/img/work - все картинки кроме иконок для спрайтов, будет скомпелировано в `"build/img"`
src/img/icons - все картинки иконок для спрайтов, будет скомпелировано в `src/work/icons.png` + `src/sass/partials/icons.scss`
src/img/icons - все картинки иконок SVG, будут скомпелированы в `src/work/sprite.svg` + `src/sass/partials/svg_sprite.scss`
src/sass - стили, скомпелируется в `"build/css"`
src/js - скрипты, скомпелируется в `"build/js"`
pages - html файлы, скомпелируются файлы из корня `src` в корень `build`
```

### Использование спрайта SVG

```html
@@include('mixins/svg-icon.html', {"name": "corrected", "class": "color-red"})
```
Где name - имя файла иконки, а class - дополнительные классы

### Деплой на FTP

```bash
$ gulp build
$ gulp test
$ gulp deploy
```

### Создание архива приложения

#### файл app.zip будет доступен в папке `app`

```bash
$ gulp zip
```

#### Подключение к Laravel

Компилируем верстку
```bash
$ gulp build
$ gulp test --noinline --nohtmlmin
```

Копируем ```./webpack-example/webpack.mix.itsclient.js``` в директорию родителя
```bash
$ cp ./webpack-example/webpack.mix.itsclient.js ../
$ cd ../
```
Добавляем в Laravel поддержку этого файла, в файл webpack.mix.js вставляем строки 

```javascript
if (process.env.section) {
    require(`${__dirname}/webpack.mix.${process.env.section}.js`);
}
```
Добавляем строку в файл ```package.json``` строки в серкцию ```scripts``` 
```json
"itsclient": "cross-env process.env.section=itsclient NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
```

Запускаем команду ```npm run itsclient```

Подключаем в layouts

Стили:
```html
<link rel="stylesheet" href="{{ asset('its-client/css/plugins.css') }}">
<link rel="stylesheet" href="{{ asset('its-client/css/style.css') }}">
или
<link rel="stylesheet" href="{{ asset('its-client/css/style.min.css') }}">
```

Скрыпты:
```html
<script src="{{ asset('its-client/js/plugins.js') }}"></script>
<script src="{{ asset('its-client/js/script.js') }}"></script>
или
<script src="{{ asset('its-client/js/script.min.js') }}"></script>
```

PHPMAILER:

```bash
$ cd smtp && composer install
```

Добавить к форме клас ```html .send-ajax```
Используйте события 
```javascript
$('form.send-ajax').on('formSendSuccess', function(e) {}); // отправка успешна

// или

$('form.send-ajax').on('formSendFailed', function(e) {}); // отправка ошибочна
```
