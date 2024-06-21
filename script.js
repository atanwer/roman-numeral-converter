const convertBtn = document.getElementById("convert-btn");
const numberElem = document.getElementById("number");
const outputElem = document.getElementById("output");


const convertToRoman = (num) => {
  const romanNumerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';
  let number = parseInt(num);

  for (const [roman, value] of romanNumerals) {
    while (number >= value) {
      result += roman;
      number -= value;
    }
  }

  output.innerHTML = `${result}`;
  output.classList.remove('hidden');
}

convertBtn.addEventListener("click", () => {
  const number = numberElem.value;
  if (!number) {
    outputElem.innerText = "Please enter a valid number";
  } else if (number < 0) {
    outputElem.innerText = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    outputElem.innerText = "Please enter a number less than or equal to 3999";
  } else {
    convertToRoman(number)
  }
  output.classList.remove('hidden');
})

