import { postUser } from "../../../service/user-service"
import faker from 'faker-br'

let response:any 

describe('/POST User', () => {
    it('register user', async () => {
        const credentials = ({
            nome: faker.name.firstName() + ' ' + faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            administrador: `${faker.random.boolean()}`
        })
        response = await postUser(credentials)
        expect(response.status).toBe(201)
        expect(response.body.message).toBe('Cadastro realizado com sucesso')
    })
})