'use strict';

const Controller = require('egg').Controller;

class Test extends Controller {
    async index() {
        const { ctx } = this

        const query = JSON.stringify({
            query: `{ getAllUsers { id name } }`,
        });

        const res = await ctx.service.graphql.query(query)
        ctx.body = res || 'hello world'
    }
}

module.exports = Test;
