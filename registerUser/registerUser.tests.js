const registerUser = require("./registerUser")

test("saves user record in the database",function(){
    const email = "fakeuser@gmail.com"
    const password = "pa$$word"

    registerUser(email,password)
})