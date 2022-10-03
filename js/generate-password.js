const SPECIALS = '!@#$%^&*()_+{}:"<>?\|[]\',./`~';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCADE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMBER = '0123456789';
const ALL = `${SPECIALS}${LOWERCASE}${UPPERCADE}${NUMBER}`;

const getIterableArray = length => Array.from({ length }, (el, index) => index + 1); //create array [1,2,...length]

const rundomSymb = (set, min, max) => {
  let length = min;
  if (max !== undefined) {
    length += Math.floor(Math.random() * (max - min));
  }
  return getIterableArray(length).map(() => set.charAt(Math.floor(Math.random() * set.length))).join("");
}

const shuffle = (set) => {
  let array = set.split("");
  let length = array.length;
  let itterable = getIterableArray(length);
  let shuffiled = itterable.reduce((acc, value, index) => {
    let randomIndex = Math.floor(Math.random() * value);
    [acc[value - 1], acc[randomIndex]] = [acc[randomIndex], acc[value - 1]];
    return acc;
  }, [...array]);
  return shuffiled.join("");
}

module.exports = () => {
  let password = rundomSymb(SPECIALS, 1).concat(
    rundomSymb(LOWERCASE, 1),
    rundomSymb(UPPERCADE, 1),
    rundomSymb(NUMBER, 1),
    rundomSymb(ALL, 4, 12)
  );
  return shuffle(password);
}