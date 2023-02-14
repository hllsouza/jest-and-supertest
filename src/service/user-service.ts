import request from '../__tests__/e2e/__config__/settings'

export async function postUser(credentials: any) {
    return await request
     .post('/usuarios')
     .send({nome: credentials.nome,
            email: credentials.email,
            password: credentials.password,
            administrador: credentials.administrador
    })
}