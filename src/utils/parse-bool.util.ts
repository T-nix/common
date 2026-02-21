'use strict'
const parseBoolean = (value: string) => {
	if (typeof value === 'boolean') {
		return value
	}
	if (typeof value !== 'string') {
		throw new TypeError('Input must be a string')
	}

	switch (value.trim().toLowerCase()) {
		case 'true':
			return true
		case 'false':
			return false
		default:
			return false
	}
}

export default parseBoolean
