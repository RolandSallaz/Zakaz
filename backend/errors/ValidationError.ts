export default class ValidationError extends Error {
  public statusCode: number
  constructor(message: string = 'Ошибка валидации') {
    super(message)
    this.statusCode = 400
  }
}
