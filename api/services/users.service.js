const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
const prisma = require('../db/prisma')

module.exports = {
    auth
}

async function auth({ username, password }) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: username,
                password: password  
            }
        })
        
        if (!user) throw 'Username or password is incorrect'
    
        // Create a JWT Token - Valid 1 hourt
        const token = jwt.sign({ sub: user.id }, secret, { expiresIn: '1h' });
        user.token = token
        // Return User Details
        // return user
        return { 
            firstName: user.firstName, 
            lastName: user.lastName, 
            email: user.email, 
            token: token 
        }
    } catch (error) {
        console.log("User Service Error (auth): " + error)
    }

}
