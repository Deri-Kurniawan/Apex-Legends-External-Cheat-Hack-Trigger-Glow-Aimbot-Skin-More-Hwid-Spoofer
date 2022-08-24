export const INTERNATIONAL_SYMBOL = ["", "k", "m", "g", "t", "p", "e"];
export const INDONESIAN_SYMBOL = ["", "rb", "jt", "M", "T"];

const abbreviateNumber = (number, suffixSymbol) => {
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier === 0) return number;

  // get suffix and determine scale
  var suffix = suffixSymbol[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return `${scaled.toFixed(1)} ${suffix}`;
};

export default abbreviateNumber;
