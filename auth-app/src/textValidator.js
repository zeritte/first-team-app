export const emailValidate = (email) => {
   // '@' isareti ve 2 adet nokta icermeli
   // The g(global) in the regular expression says to search the whole string rather than just find the first occurrence.
   if (email.match('/@/g' || []) == 1 && email.match('/./g' || []) >= 2)  return true; // buradaki || [] ifadesi ne demek @??
   return false;     
}

export const nameValidate = (name) => {
   // isim 5 karakterden buyuk ve bosluksuz olmali
   // @?? kullanici 5 karakteri gectikten sonra bosluk tusuna basarsa ya o zaman butonu tekrar siliklestirecek miyiz yahut kullanici farkli sirayla isim mail ve sifre girerse?
   if (name.length >= 5 && !name.includes(" ")) return true;
   return false;
}

export const passwordValidate = (password) => {
   // sifre en az 6 karakter olmali
   if (password.length >= 6)  return true;
   return false;
}

// sayfalar arasu gecis navigasyon ayari react 5
// text inputlari yazildikca hatalar hesaplanmali. (useEffect) =< eger bir ekranda hic hata yoksa buton gorunmeli, eger varsa buton yerine hata mesaji goruntulenmeli
// peki ya bunu 3 input girdikten sonra mi yoksa kullanicinin girdigi her textInputta mi gostermeli => YANIT: bence 3 input birden bitince => bunu da en asagi hata mesaji gosterecegimiz yerde buradaki 3 fonksiyonun birden & baglaci ile baglanmasi ile yapabiliriz eger dogruysa "giris" butonu cikar yanlissa "hata mesaji" verilir ekrana text icinde.