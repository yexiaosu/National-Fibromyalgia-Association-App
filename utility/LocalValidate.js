export const localValidate = (firstName, lastName, phoneNumber, zipCode, birthday, gender) => {
  let emptyFields = []

  if (!firstName) {
    emptyFields.push('first name')
  }

  if (!lastName) {
    emptyFields.push('last name')
  }

  if (!phoneNumber) {
    emptyFields.push('phone number')
  }

  if (!zipCode) {
    emptyFields.push('zip code')
  }

  if (!birthday || new Date().toLocaleDateString('en-US') === birthday) {
    emptyFields.push('birthday')
  }

  if (!gender) {
    emptyFields.push('gender')
  }

  return emptyFields
}
