#NodeJS Static Web Application
A basic framework web site to demonstrate the use of Node.Js, gulp, jade/pug, sass and typescript to build a static easy maintainable source code


Tools to use
- Node.Js - Ramverk för lokal server och import av paket m.m.
- Gulp - Sätta samman och skapa slutresultat
- Pug - Ett bättre sätt att skapa html
- Sass - Ett bättre sätt att skriva css
- Typescript - Ett bättre sätt att skriva javascript

A simple http-server is used to display the site at localhost

## Preparation
- Install node https://nodejs.org/en/download/
- Update node: npm install npm@latest -g
- Initiera nodejs: npm init

## Install Development dependencies 
- npm install gulp --save-dev
- npm install gulp-clean --save-dev
- npm install gulp-pug --save-dev
- npm install node-sass --save-dev
- npm install gulp-sass --save-dev
- npm install typescript --save-dev
- npm install gulp-typescript --save-dev


## Install dependencies
- npm install express --save
- npm install open --save

## Bad bad fsevents...
To get rid of a warning: npm install -f fsevents

## code for the package
- Gulp script: gulpfile.js
- Http Server: server.js
- Nodejs konfiguration: package.json
- Typescript konfiguration: tsconfig.json

## Commands:
- Installatino: npm install
- Clean installation: npm clean-install
- Run gulpfile: gulp
- Run script to start: npm run start
