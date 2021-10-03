const array = [2, 4, 7, 5, 4, 3, 8];

const number = array.filter(function (value, index, array) {
  return(array.indexOf(value) === index);
})
console.log(number)


function leapYear(year){
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
for (let checkYear = 2020; checkYear <= 2021; checkYear++){
  if (leapYear(checkYear)) {
    console.log(checkYear + '年はうるう年です');
  } else {
    console.log(checkYear + '年はうるう年ではありません');
  }
}