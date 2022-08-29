import { RequiredFielError } from '../erros/required-field-error'
import { RequiredFieldValidation } from './required-field-validation'

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('error')
    expect(error).toEqual(new RequiredFielError())
  })
})
