function controlFromInput(fromSlider1, fromInput1, toInput1, controlSlider) {
  const [from1, to1] = getParsed(fromInput1, toInput1);
  fillSlider(fromInput1, toInput1, "#868686", "#2A8927", controlSlider);
  if (from1 > to1) {
    fromSlider1.value = to1;
    fromInput1.value = to1;
  } else {
    fromSlider1.value = from1;
  }
}

function controlToInput(toSlider1, fromInput1, toInput1, controlSlider) {
  const [from1, to1] = getParsed(fromInput1, toInput1);
  fillSlider(fromInput1, toInput1, "#868686", "#2A8927", controlSlider);
  setToggleAccessible(toInput1);
  if (from1 <= to1) {
    toSlider1.value = to1;
    toInput1.value = to1;
  } else {
    toInput1.value = from1;
  }
}

function controlFromSlider(fromSlider1, toSlider1, fromInput1) {
  const [from1, to1] = getParsed(fromSlider1, toSlider1);
  fillSlider(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
  if (from1 > to1) {
    fromSlider1.value = to1;
    fromInput1.value = to1;
  } else {
    fromInput1.value = from1;
  }
}

function controlToSlider(fromSlider1, toSlider1, toInput1) {
  const [from1, to1] = getParsed(fromSlider1, toSlider1);
  fillSlider(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
  setToggleAccessible(toSlider1);
  if (from1 <= to1) {
    toSlider1.value = to1;
    toInput1.value = to1;
  } else {
    toInput1.value = from1;
    toSlider1.value = from1;
  }
}

function getParsed(currentFrom, currentTo) {
  const from1 = parseInt(currentFrom.value, 10);
  const to1 = parseInt(currentTo.value, 10);
  return [from1, to1];
}

function fillSlider(from1, to1, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to1.max - to1.min;
  const fromPosition = from1.value - to1.min;
  const toPosition = to1.value - to1.min;
  controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider1 = document.querySelector("#toSlider1");
  if (Number(currentTarget.value) <= 0) {
    toSlider1.style.zIndex = 2;
  } else {
    toSlider1.style.zIndex = 0;
  }
}

const fromSlider1 = document.querySelector("#fromSlider1");
const toSlider1 = document.querySelector("#toSlider1");
const fromInput1 = document.querySelector("#fromInput1");
const toInput1 = document.querySelector("#toInput1");
fillSlider(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
setToggleAccessible(toSlider1);

fromSlider1.oninput = () =>
  controlFromSlider(fromSlider1, toSlider1, fromInput1);
toSlider1.oninput = () => controlToSlider(fromSlider1, toSlider1, toInput1);
fromInput1.oninput = () =>
  controlFromInput(fromSlider1, fromInput1, toInput1, toSlider1);
toInput1.oninput = () =>
  controlToInput(toSlider1, fromInput1, toInput1, toSlider1);
