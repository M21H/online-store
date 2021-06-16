const Router = require('express')
const router = new Router()
const userContriller = require('../controllers/userContriller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userContriller.registration)
router.post('/login', userContriller.login)
router.get('/auth', authMiddleware, userContriller.check)

module.exports = router
