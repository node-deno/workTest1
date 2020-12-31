const crypto = require('crypto')

module.exports = (str) => {
	return crypto.createHash('SHA256').update(str).digest('hex')
} 
