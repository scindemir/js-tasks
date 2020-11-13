const string = "Привет! Как дела?";

const vowels = "ауоыиэяюёеАУОЫИЭЯЮЁЕ";
const vowelsAr = vowels.split("");

const getVowels = stringToFilter => {
  let extractedVowels = "";

  for (let i=0; i < stringToFilter.length; i++){
    const currentLetter = stringToFilter[i];

    if (vowelsAr.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));
