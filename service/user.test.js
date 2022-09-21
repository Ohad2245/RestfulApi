const userService = require('../api/controllers/orders');

describe('get All Orders',() => {
    test("does nothing if success",() => {
        userService.newOrder('test','dds','wegewg');
    })  
})