import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFielError } from '@/validation/erros'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) { }

  validate (value: string): Error {
    return new RequiredFielError()
  }
}
