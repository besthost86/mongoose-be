const supertest  = require('supertest')
const app = require('../app.js');
const routesModule = require('../routes.js');
// import {jest} from '@jest/globals'

const myMockFn = jest
  .fn()
   .mockImplementation(scalar => 42 + scalar)
  .mockReturnValue(5)
  .mockName('add42');

describe('post dummy route',  () => {
  describe('given the userId is in request body', () => {
      it('it should return 200 with payload', async () => {
        console.log(myMockFn(1), myMockFn(2), myMockFn());
          const {body: {token, payload}} = await supertest(app).post('/dummy')
          .send({userId: 1}).expect(200);
         
         })    
  })
})
