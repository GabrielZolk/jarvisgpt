import { FunctionDeclaration } from '../../interfaces/FunctionDeclaration';

async function callback(): Promise<string> {
    const response = { date: new Date().toString() }
    return JSON.stringify(response)
}

export const today: FunctionDeclaration = {
    name: 'today',
    description: 'Retorna a data e hora hoje.',
    parameters: {
        type: 'object',
        properties: {},
        required: [],
    },
    callback,
}