const chai = require('chai');
var expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

var token = '';

describe('Users', () => {
   it('Should be Login and Get Token', () => {
      chai.request(app)
         .post('/users/login')
         .send({username: 'fickry', password: 'biliman'})
         .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res).to.be.json
            expect(res).to.have.property('message')
            expect(res.body.message).to.equal('Success Login')
            expect(res).to.have.property('data')
            expect(res.body.data).to.have.property('data')
            token = res.body.data.token
      })
   })
   it('Should give error when username and password wrong', () => {
      chai.request(app)
         .post('/users/login')
         .send({username: 'fickry', password: 'bilimanXXX'})
         .end((err, res) => {
            expect(res).to.have.status(403)
            expect(res).to.be.json
            expect(res).to.have.property('message')
            expect(res.body.message).to.equal('Invalid Login')
      })
   })
})

describe('CRUD Konstituen', () => {
   it('Should get Data Konstituen', () => {
      chai.request(app)
         .get('/konstituens')
         .set('token', token)
         .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res).to.be.json
            expect(res).to.have.property('message')
            expect(res.body.message).to.equal('Read Data Konstituen')
            expect(res).to.have.property('data')
            expect(res.body.data).to.be('array')
      })
   })
})

//contoh penggunaan manual
// describe('Perhitungan', () => {
//    it('Perhitungan Perkalian', () => {
//       const hasil = 6 * 2;
//       expect(hasil).to.equal(12);
//    })
// });
//cara panggil testing : node_modules/.bin/mocha