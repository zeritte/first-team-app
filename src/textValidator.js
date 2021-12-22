// NOTE: screenler componentlar sadece gostersin hesap kitap yapmasin

export const emailValidate = (email) => {
  // '@' isareti ve 2 adet nokta icermeli
  if (countAt(email) && countDot(email)) return false;
  return "Your email should include one '@' sign and two dots('.')!";
};

export const nameValidate = (name) => {
  // isim 5 karakterden buyuk ve bosluksuz olmali
  if (nameLength(name) && nameSpace(name)) return false;
  return "Your name should be 5 or more characters and doesn't include space(' ')";
};

export const passwordValidate = (password) => {
  // sifre en az 6 karakter olmali
  if (passwordLength(password)) return false;
  return 'Your password should be at least 6 characters!';
};

const countLetter = (string, char) => {
  let count = 0;
  const charArr = string.split('');
  for (let i = 0; i < charArr.length; i += 1) {
    if (charArr[i] === char) count += 1;
  }
  return count;
};

// @?? aşağıdaki eslint hatası neden?
// eslint-disable-next-line arrow-body-style
export const countAt = (email) => {
  return countLetter(email, '@') === 1;
};

// eslint-disable-next-line arrow-body-style
export const countDot = (email) => {
  return countLetter(email, '.') >= 2;
};

// eslint-disable-next-line arrow-body-style
export const nameLength = (name) => {
  return name.length >= 5;
};

// eslint-disable-next-line arrow-body-style
export const nameSpace = (name) => {
  return !name.includes(' ');
};

// eslint-disable-next-line arrow-body-style
export const passwordLength = (password) => {
  return password.length >= 6;
};
