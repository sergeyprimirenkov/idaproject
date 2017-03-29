var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


function setValidatorNumber(id, regex) {
  var element = document.getElementById(id);
  if (element) {
    var lastValue = element.value;
    if (!regex.test(lastValue))
      lastValue = '';
    setInterval(function() {
      var value = element.value;
      if (value != lastValue) {
        if (regex.test(value))
          lastValue = value;
        else
          element.value = lastValue;
      }
    }, 10);
  }
}

function setValidatorName(id, regex) {
  var element = document.getElementById(id);
  if (element) {
    var lastValue = element.value;
    if (!regex.test(lastValue))
      lastValue = '';
    setInterval(function() {
      var value = element.value;
      if (value != lastValue) {
        if (regex.test(value))
          lastValue = value;
        else
          element.value = lastValue;
      }
    }, 10);
  }
}

setValidatorNumber('number', /^[0-9]{0,4}$/);
setValidatorNumber('number2', /^[0-9]{0,4}$/);
setValidatorNumber('number3', /^[0-9]{0,4}$/);
setValidatorNumber('number4', /^[0-9]{0,4}$/);
setValidatorNumber('cvv', /^[0-9]{0,3}$/);
setValidatorName('cardholder', /^[a-zA-Z]{0,25}$/);