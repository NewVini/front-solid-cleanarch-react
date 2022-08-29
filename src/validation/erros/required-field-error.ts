export class RequiredFielError extends Error {
  constructor () {
    super('campo obrigatório')
    this.name = 'RequiredFielError'
  }
}
