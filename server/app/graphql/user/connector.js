class UserConnector {
    constructor(ctx) {
        this.ctx = ctx
    }

    async getAllUsers() {
        return await this.ctx.service.user.getAllUsers()
    }
}

module.exports = UserConnector