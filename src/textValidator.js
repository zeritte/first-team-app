// NOTE: screenler componentlar sadece gostersin hesap kitap yapmasin

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
