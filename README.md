# MochaChai

### Mocha adalah runner testing, yang akan menjalankan test nya.
### Chai adalah assertion, yang judge apakah testing benar atau salah.

## npm install mocha chai
## Buat 1 folder test dengan 1 file (index.js) di dalamnya.

## import chai : const chai = require('chai');
## ada 3 cara menggunakan chai : should, expect, assert.
## Cara gunakan expect : var expect = chai.expect;
## dokumentasi chai di : chaijs.com

## cara running mocha : node_modules/.bin/mocha

## Cara menggunakan testing pada restful api, menggunakan chai http, npm install chai-http
## import atau require chai http : const chaiHttp = require('chai-http);
## agar chai dapat menggunakan plugins chai http, harus di use dulu : chai.use(chaiHttp);
## untuk melakukan request chai-http diharuskan menggunakan file app.js dengan cara require : const app = require('../app');

