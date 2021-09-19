// NOTE: screenler componentlar sadece gostersin hesap kitap yapmasin

const countLetter = (string, char) => {
  let count = 0;
  const charArr = string.split('');
  for (let i = 0; i < charArr.length; i += 1) {
    if (charArr[i] === char) count += 1;
  }
  return count;
};

export const emailValidate = (email) => {
  // '@' isareti ve 2 adet nokta icermeli
  if (countLetter(email, '@') === 1 && countLetter(email, '.') >= 2) return false;
  return "Your email should include one '@' sign and two dots('.')!";
};

export const nameValidate = (name) => {
  // isim 5 karakterden buyuk ve bosluksuz olmali
  if (name.length >= 5 && !name.includes(' ')) return false;
  return "Your name should be 5 or more characters and doesn't include space(' ')";
};

export const passwordValidate = (password) => {
  // sifre en az 6 karakter olmali
  if (password.length >= 6) return false;
  return 'Your password should be at least 6 characters!';
};
