const jwt = require('jsonwebtoken')

module.exports = {
	sign: (payload) => jwt.sign(payload, 'sirli_kalit', { expiresIn: 2 * (60 * 60) }),
	verify: (token) => jwt.verify(token, 'sirli_kalit')
}
