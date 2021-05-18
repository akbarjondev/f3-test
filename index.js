const express = require('express')
const app = express()

// jsonwebtoken
const jwt = require('./src/lib/jwt')

// config
const config = require('./src/config')
// data
const data = require('./src/data')
// users
const users_db = require('./src/users')

app.use(express.json())

app.use((req, res, next) => {

	if(req.url === '/login' && req.method === 'POST') {

		next()
	} else {

		try {
			
			jwt.verify(req.headers.token)

			next()

		} catch(e) {
			console.log(e)

			res.status(401).send({
				code: 401,
				message: e.message
			})
		}

	}

}) // end of middleware

// main
app.get('/', (req, res) => {

	res.send(data).end()

})

app.post('/login', (req, res) => {

	try {
		
		const { username, password } = req.body

		const isUser = users_db.findIndex(item => (item.username === username && item.password === password))

		if(isUser < 0) {

			res.send({
				code: 403,
				message: 'user not found'
			})

		} else {

			res.send({
				code: 200,
				message: 'ok',
				token: jwt.sign({ username: username, time: new Date()})
			})

		}

	} catch(e) {
		console.log(e)
	}

})

app.listen(config.PORT, () => console.log(`server ready at: http://localhost:${config.PORT}`))
