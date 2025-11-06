/**
 * The Validator class is used for validating an array of objects.
 */
export class Validator {
  validateData (rawData) {
    if (!Array.isArray(rawData) || rawData.length === 0) {
      throw new Error('Data must be a non-empty array')
    }

    rawData.forEach(d => {
      if (typeof d !== 'object' || d === null) {
        throw new Error('Data needs be sent as objects in an array and the object cannot be null')
      }

      if (typeof d.label !== 'string' || d.label.trim() === '') {
        throw new Error('Each label needs to be a string, that is not empty')
      }

      if (typeof d.value !== 'number' || d.value < 0) {
        throw new Error('Value needs to be a non-negative number')
      }
    })
    return rawData
  }
}