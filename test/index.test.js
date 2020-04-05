const { getTODOById } = require('../index');
const expect = require('chai').expect;
const sinon = require('sinon');
const request = require('request');

describe('getTODOById', () => {
    // sinon stub setup
    before(() => {
        sinon
            .stub(request, 'get')
            .yields(null, null, JSON.stringify({ id: 1 }));
    });

    // actual test case
    it('todo has id of 1', (done) => {
        getTODOById(1)
            .then((todo) => {
                expect(todo.id).to.equal(1);
                done();
            });
    })

    // tear down sinon stub
    after(() => {
        request.get.restore();
    });
})
