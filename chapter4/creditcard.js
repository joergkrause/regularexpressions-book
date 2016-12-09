// expression for copy and paste
var allcards = /^(?:4[0-9]{12}(?:[0-9]{3})?| 5[1-5][0-9]{14}| 3[47][0-9]{13}| 3(?:0[0-5]|[68][0-9])[0-9]{11})$/;


function valid_credit_card(value) {
  // Add the former expression here 
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn algorithm
  var nCheck = 0, nDigit = 0, bEven = false;
  value = value.replace(/\D/g, "");

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n),
      nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return (nCheck % 10) == 0;
}

console.log(valid_credit_card('4012888888881881'));