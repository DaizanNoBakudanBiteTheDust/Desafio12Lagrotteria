import mongoose from 'mongoose';
import Users from '../../src/dao/testManagerDb/users.dao.js';
import Carts from '../../src/dao/testManagerDb/cart.dao.js';
import Products from '../../src/dao/testManagerDb/products.dao.js';
import configs from '../../src/config.js';
import { expect } from 'chai';
import supertest from 'supertest';

const requester = supertest(`http://localhost:${configs.port}`);

try {
    await mongoose.connect(configs.mongoUrl);
} catch (error) {
    console.log(error)
}


let productsDao;
let usersDao;
let cartsDao;


describe('probando dao de usuario', () => {
    before(async () =>{
        usersDao = new Users();
    });

    /*
    it('el dao debe crear un usuario en la base de datos', async () => {
        const mockUser = {
            first_name: "lucas",
            last_name: "pato",
            email: "qaasdsf@gmail.com",
            age: 20,
            password: '1234'
        };

        const result = await usersDao.save(mockUser);
        assert.ok(result._id);

        const {
            statusCode,
            _body
        } = await requester.post('/api/sessions/register').send(mockUser);
        expect(statusCode).to.be.eql(200);
        expect(_body.payload).to.have.property('_id');
    });
    */
});
