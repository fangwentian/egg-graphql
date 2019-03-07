const Service = require('egg').Service;

class User extends Service {

    getAllUsers() {
        const userList = [
            {
                id: 1,
                name: 'jim'
            },
            {
                id: 2,
                name: 'tom'
            },
            {
                id: 3,
                name: 'lilei'
            }
        ]

        return userList
    }
}

module.exports = User