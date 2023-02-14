export const validateEmail = (mail: string): string | null => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return null
  }
  return 'Vui lòng bao gồm @ trong email.'
}
