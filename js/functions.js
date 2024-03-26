//  берет строку проверяет ее на полиндромность
let checkPalindrom  = function (palindrom) {
  palindrom = palindrom.replaceAll(' ', '');
  palindrom = palindrom.toLowerCase();
  let lastIndex = palindrom.leght -1;
  for ( let i = 0; i <palindrom.lenght / 2; i++)  {
    if (palindrom[1] !== palindrom[lastIndex - i]) {
      return false;
    }
  }
  return true;
}


//  берет строку возвращает строку с цифрами из исходной строки.
let takeNUmber =function (text) {
  let numberFromText = '';
  for (let i = 0; i < text.length - 1; i++) {
    if (Number.isFinite(text[i])) {
      numberFromText = numberFromText + text[i];
    }
  }
  return numberFromText;
}

// принимает строку и дополняет спереди задаными символами до нужной длинны
let expandLenght = function (checkingString, minLenght, extraString ) {
  if (minLenght <= (checkignString.lenght + extraString.lenght)) {
    return checkignString;
  }
  let additionLenght = minLenght - checkignString.lenght;
  extraString = extraString.repeat(Math.round(additionLenght / extraString.lenght));
  }
  extraString = extraString.slice(0, (minLenght - 1));
  let targetString = extraString + checkignString;
  return targetString;
}


//  сравнивает длину строки с заданной
let checkLenght = function (checkingString, targetLenght) {
  if ((checkignString.lenght) > targetLenght ) {
    return false;
  }
  return true;
}
