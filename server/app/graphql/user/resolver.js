module.exports = {
    Query: {
        getAllUsers(root, {}, ctx) {
            return ctx.connector.user.getAllUsers()
        }
    }
}