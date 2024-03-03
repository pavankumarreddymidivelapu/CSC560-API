const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const Item = require('../models/Product');

const expect = chai.expect;
chai.use(chaiHttp);

describe('/GET items', () => {
    let appServer;

    before((done) => {
        appServer = app.listen(5001, done);
    });

    after((done) => {
        appServer.close(() => {
            console.log('Server closed');
            done();
        });
    });

    // Increase the timeout for the beforeEach hook
    beforeEach(function (done) {
        this.timeout(5000);

        // Clear the database before each test using promises
        Item.deleteMany({})
            .then(() => done())
            .catch((err) => done(err));
    });

    it('should GET all the items', (done) => {
        chai.request(app)
            .get('/api/items')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});

describe('/POST item', () => {
    let appServer;

    before((done) => {
        appServer = app.listen(5001, done);
    });

    after((done) => {
        appServer.close(() => {
            console.log('Server closed');
            done();
        });
    });

    // Increase the timeout for the beforeEach hook
    beforeEach(function (done) {
        this.timeout(10000);

        // Clear the database before each test using promises
        Item.deleteMany({})
            .then(() => done())
            .catch((err) => done(err));
    });

    it('should POST an item', (done) => {
        const item = {
            name: 'Test Item'
        };

        chai.request(app)
            .post('/api/items')
            .send(item)
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('createdAt');
                done();
            });
    });
});
