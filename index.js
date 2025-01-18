let bgColorInputEl = document.getElementById("bgColorInput");
let fontColorInputEl = document.getElementById("fontColorInput");
let fontSizeInputEl = document.getElementById("fontSizeInput");
let fontWeightInputEl = document.getElementById("fontWeightInput");
let paddingInputEl = document.getElementById("paddingInput");
let borderRadiusInputEl = document.getElementById("borderRadiusInput");
let borderInputEl = document.getElementById("borderInput");

let customButtonEl = document.getElementById("customButton");

function onApplayProperties() {
  let firstInput = bgColorInputEl.value;
  let secondtInput = fontColorInputEl.value;
  let thirdInput = fontSizeInputEl.value;
  let fourthInput = fontWeightInputEl.value;
  let fivethInput = paddingInputEl.value;
  let sixthInput = borderRadiusInputEl.value;
  let sevenInput = borderInputEl.value;

  customButtonEl.style.backgroundColor = firstInput;
  customButtonEl.style.color = secondtInput;
  customButtonEl.style.fontSize = thirdInput;
  customButtonEl.style.fontWeight = fourthInput;
  customButtonEl.style.padding = fivethInput;
  customButtonEl.style.borderRadius = sixthInput;
  customButtonEl.style.border = sevenInput;
  
}
