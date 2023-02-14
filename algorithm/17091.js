const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
rl.on('line', (line) => data.push(line)).on('close', () => {
  console.log(solution(data));
  process.exit();
});

const HOURS = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
];
const MINUTES = [
  "o' clock",
  ...HOURS,
  'thirteen',
  'fourteen',
  'quarter',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'half',
];

const SPECIAL_HOUR = {
  MAX: 12,
};
const SPECIAL_MINUTE = {
  MIN: 0,
  QUARTER: 15,
  HALF: 30,
  MAX: 60,
};

const solution = (data) => {
  const [hour, minute] = data.map(Number);

  const isOverHalf = minute > SPECIAL_MINUTE.HALF;

  let formattedHour = (hour % SPECIAL_HOUR.MAX) - (isOverHalf ? 0 : 1);
  if (formattedHour < 0) formattedHour = SPECIAL_HOUR.MAX - 1;
  const formattedMinute = isOverHalf ? SPECIAL_MINUTE.MAX - minute : minute;

  if (minute === SPECIAL_MINUTE.MIN) {
    return `${HOURS[formattedHour]} ${MINUTES[formattedMinute]}`;
  }

  const printDelimiter = isOverHalf ? 'to' : 'past';
  if (
    formattedMinute === SPECIAL_MINUTE.QUARTER ||
    formattedMinute === SPECIAL_MINUTE.HALF
  ) {
    return `${MINUTES[formattedMinute]} ${printDelimiter} ${HOURS[formattedHour]}`;
  }

  const formattedMinuteWord = `minute${formattedMinute > 1 ? 's' : ''}`;
  return `${MINUTES[formattedMinute]} ${formattedMinuteWord} ${printDelimiter} ${HOURS[formattedHour]}`;
};
