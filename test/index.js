import http from 'http';
import assert from 'mocha';

import '../src/index.js'

describe('Example Node Server', () => {
    it('should return 200', done => {
        http.get('http://127.0.0.1:3000', res => {
            console.log(res.statusCode)
            done();
        });
    });
});