import { fetchAllCountries } from "../http/http";

export async function prepareCountries(roundsNumber) {
  const allCountries = await fetchAllCountries();
  shuffle(allCountries);
  const quizCountries = allCountries.splice(0, roundsNumber);
  const correctAnswersNumber = Math.ceil(roundsNumber / 2);
  const incorrectQuizAnswers = quizCountries.slice(correctAnswersNumber);
  assignFalseValues(allCountries, incorrectQuizAnswers);
  shuffle(quizCountries);
  return quizCountries;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function assignFalseValues(countries, incorrectQuizAnswers) {
  for (const key in incorrectQuizAnswers) {
    const incorrectCountryIndex = Math.floor(Math.random() * countries.length);
    incorrectQuizAnswers[key].name = countries[incorrectCountryIndex].name;
    incorrectQuizAnswers[key].value = false;
    countries.splice(incorrectCountryIndex, 1);
  }
}
