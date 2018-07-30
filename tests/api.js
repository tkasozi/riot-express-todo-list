
const request = require('supertest');
const app = require('./app');

describe('GET /',()=>{
    it('should return OK', (done)=>{
        request(app)
            .get('/')
            .expect(200, done);
    })
});