// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);
  document.getElementById("prime").innerHTML = isPrime(numInput);
  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  // document.getElementById("sign").innerHTML = getSign(numInput);
  // document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
  // document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  // document.getElementById('digits').innerHTML = numDigits(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.
function getSign(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "Negitive";
  } else {
    return "zero";
  }
}

function evenOrOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function multipleOf10(num) {
  if (num % 10 == 0) {
    return "Yes";
  } else {
    return "No";
  }
}

function numDigits(num) {
  let digits = (document.getElementById("digits").innerHTML =
    num.toString().length);
  if (num < 0) {
    digits--;
  }
  return digits;
}

function isPrime(num) {
  let isPrimeNumber = true;
  for (let i = Math.round(Math.sqrt(num)); i > 0; i--) {
    if (num % i === 0 && i != 1) {
      isPrimeNumber = false;
      document.getElementById("prime").innerHTML = isPrimeNumber;
    }
  }
  document.getElementById("prime").innerHTML = isPrimeNumber;
  console.log(num, isPrimeNumber);
  return isPrimeNumber;
}
