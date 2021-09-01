// hatalari burada dondurmem lazim
// screenler componentlar sadece gostersin hesap kitap yapmasin

/**
 * @??
 * !!text validator true false yerine hata mesajı döndürse daha iyi
 * 
 */

const countLetter = (string, char) => {
   let count = 0;
   const charArr = string.split('');
   for (let i = 0; i < charArr.length; i++) {
      if (charArr[i] === char) count++
   }
   return count;
}

export const emailValidate = (email) => {
   // '@' isareti ve 2 adet nokta icermeli
   if (countLetter(email, '@') === 1 && countLetter(email, '.') >= 2)  return true;
   return false;     
}

export const nameValidate = (name) => {
   // isim 5 karakterden buyuk ve bosluksuz olmali
   if (name.length >= 5 && !name.includes(" ")) return true;
   return false;
}

export const passwordValidate = (password) => {
   // sifre en az 6 karakter olmali
   if (password.length >= 6)  return true;
   return false;
}



// sayfalar arasu gecis navigasyon ayari react 5-6
// text inputlari yazildikca hatalar hesaplanmali. (useEffect) => eger bir ekranda hic hata yoksa buton gorunmeli, eger varsa buton yerine hata mesaji goruntulenmeli