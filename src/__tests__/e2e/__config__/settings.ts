import defaults from 'superagent-defaults'
import supertest from 'supertest'

const baseUrl = process.env.SERVE_REST_SERVICE_API_URL
const request = defaults(supertest(baseUrl))

export default request