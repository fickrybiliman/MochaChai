const chai = require('chai');
var expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

var token;

describe('Users', () => {
   it('Should be Login and Get Token', (done) => {
      chai.request(app)
         .post('/users/login')
         .send({username: 'fickry', password: 'biliman'})
         .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.have.property('message');
            expect(res.body.message).to.equal('Success Login');
            expect(res.body).to.have.property('data');
            expect(res.body.data).to.have.property('token');
            expect(res.body.data).to.have.property('token').with.lengthOf(356);
            token = res.body.data.token;
            done();
      })
   })
   it('Should give error when username and password wrong', () => {
      chai.request(app)
         .post('/users/login')
         .send({username: 'fickry', password: 'bilimanXXX'})
         .end((err, res) => {
            expect(res).to.have.status(403);
            expect(res).to.be.json;
            expect(res.body).to.have.property('message')
            expect(res.body.message).to.equal('Invalid Login')
      })
   })
})

describe('CRUD Konstituen', () => {
   it('Should READ Data Konstituen', () => {
      chai.request(app)
         .get('/konstituens')
         .set('token', token)
         .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res).to.be.json
            expect(res.body).to.have.property('message')
            expect(res.body.message).to.equal('Read Data Konstituen')
            expect(res.body).to.have.property('data')
            expect(res.body.data).to.be('array')
      })
   })
   it('Should CREATE Data Konstituen', () => {
      chai.request(app)
         .post('/konstituens')
         .set('token', token)
         .send({nama: 'John Wick', 
                nik: 61122334455667788, 
                hp: 08989012345678, 
                alamat: 'Paret Semben', 
                kecamatanID: 6, 
                kelurahanID:26, 
                tps: 10})
         .end((err, res) => {
            expect(res).to.have.status(200)
            expect(res).to.be.json
            expect(res.body).to.have.property('message');
            expect(res.body.message).to.equal('Konstituen Created');
            expect(res.body).to.have.property('data');
            expect(res.body.data.konstituen).to.have.property('nama').to.equal('John Wick');
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