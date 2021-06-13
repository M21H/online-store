const Router = require('express')
const router = new Router()
const userContriller = require('../controllers/userContriller')

router.post('/reginstration', userContriller.registration)
router.post('/login', userContriller.login)
router.get('/auth', userContriller.check)

module.exports = router