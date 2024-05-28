let sort_input = document.getElementById("sortInput1");

if (sort_input) {
  function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, "#868686", "#2A8927", controlSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromSlider.value = from;
    }
  }

  function controlToInput(toSlider, fromInput, toInput, controlSlider) {
    const [from, to] = getParsed(fromInput, toInput);
    fillSlider(fromInput, toInput, "#868686", "#2A8927", controlSlider);
    setToggleAccessible(toInput);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
    }
  }

  function controlFromSlider(fromSlider, toSlider, fromInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, "#868686", "#2A8927", toSlider);
    if (from > to) {
      fromSlider.value = to;
      fromInput.value = to;
    } else {
      fromInput.value = from;
    }
  }

  function controlToSlider(fromSlider, toSlider, toInput) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, "#868686", "#2A8927", toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
      toInput.value = to;
    } else {
      toInput.value = from;
      toSlider.value = from;
    }
  }

  function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
  }

  function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max - to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
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
    const toSlider = document.querySelector("#toSlider");
    if (Number(currentTarget.value) <= 0) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
  }

  const fromSlider = document.querySelector("#fromSlider");
  const toSlider = document.querySelector("#toSlider");
  const fromInput = document.querySelector("#fromInput");
  const toInput = document.querySelector("#toInput");
  fillSlider(fromSlider, toSlider, "#868686", "#2A8927", toSlider);
  setToggleAccessible(toSlider);

  fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
  toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
  fromInput.oninput = () =>
    controlFromInput(fromSlider, fromInput, toInput, toSlider);
  toInput.oninput = () =>
    controlToInput(toSlider, fromInput, toInput, toSlider);

  document.addEventListener("DOMContentLoaded", function () {
    const checkboxesContainers = document.querySelectorAll(".sort-menu-block");

    checkboxesContainers.forEach(function (container) {
      const checkboxes = container.querySelectorAll(".form-check-input");
      const boxForCheckboxes = container.querySelectorAll(
        ".sort-menu__box-for-checkbox"
      );

      checkboxes.forEach(function (checkbox, index) {
        const boxForCheckbox = boxForCheckboxes[index];

        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            boxForCheckbox.classList.add("checkbox_checked");
          } else {
            boxForCheckbox.classList.remove("checkbox_checked");
          }
        });

        boxForCheckbox.addEventListener("click", function () {
          checkbox.checked = !checkbox.checked;
          if (checkbox.checked) {
            boxForCheckbox.classList.add("checkbox_checked");
          } else {
            boxForCheckbox.classList.remove("checkbox_checked");
          }
        });
      });
    });
  });

  // Close sort menu
  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".sort_closer-button");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.style.display = "none";
        }
      });
    });
  });

  // sort-range-mobile

  const fromSlider1 = document.querySelector("#fromSlider1");
  const toSlider1 = document.querySelector("#toSlider1");
  const fromInput1 = document.querySelector("#fromInput1");
  const toInput1 = document.querySelector("#toInput1");
  fillSlider1(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
  setToggleAccessible1(toSlider1);

  fromSlider1.oninput = () =>
    controlFromSlider1(fromSlider1, toSlider1, fromInput1);
  toSlider1.oninput = () => controlToSlider1(fromSlider1, toSlider1, toInput1);
  fromInput1.oninput = () =>
    controlFromInput1(fromSlider1, fromInput1, toInput1, toSlider1);
  toInput1.oninput = () =>
    controlToInput1(toSlider1, fromInput1, toInput1, toSlider1);

  function controlFromInput1(
    fromSlider1,
    fromInput1,
    toInput1,
    controlSlider1
  ) {
    const [from1, to1] = getParsed(fromInput1, toInput1);
    fillSlider1(fromInput1, toInput1, "#868686", "#2A8927", controlSlider1);
    if (from1 > to1) {
      fromSlider1.value = to1;
      fromInput1.value = to1;
    } else {
      fromSlider1.value = from1;
    }
  }

  function controlToInput1(toSlider1, fromInput1, toInput1, controlSlider1) {
    const [from1, to1] = getParsed(fromInput1, toInput1);
    fillSlider1(fromInput1, toInput1, "#868686", "#2A8927", controlSlider1);
    setToggleAccessible1(toInput1);
    if (from1 <= to1) {
      toSlider1.value = to1;
      toInput1.value = to1;
    } else {
      toInput1.value = from1;
    }
  }

  function controlFromSlider1(fromSlider1, toSlider1, fromInput1) {
    const [from1, to1] = getParsed(fromSlider1, toSlider1);
    fillSlider1(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
    if (from1 > to1) {
      fromSlider1.value = to1;
      fromInput1.value = to1;
    } else {
      fromInput1.value = from1;
    }
  }

  function controlToSlider1(fromSlider1, toSlider1, toInput1) {
    const [from1, to1] = getParsed(fromSlider1, toSlider1);
    fillSlider1(fromSlider1, toSlider1, "#868686", "#2A8927", toSlider1);
    setToggleAccessible1(toSlider1);
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

  function fillSlider1(from1, to1, sliderColor1, rangeColor1, controlSlider1) {
    const rangeDistance1 = to1.max - to1.min;
    const fromPosition1 = from1.value - to1.min;
    const toPosition1 = to1.value - to1.min;
    controlSlider1.style.background = `linear-gradient(
      to right,
      ${sliderColor1} 0%,
      ${sliderColor1} ${(fromPosition1 / rangeDistance1) * 100}%,
      ${rangeColor1} ${(fromPosition1 / rangeDistance1) * 100}%,
      ${rangeColor1} ${(toPosition1 / rangeDistance1) * 100}%, 
      ${sliderColor1} ${(toPosition1 / rangeDistance1) * 100}%, 
      ${sliderColor1} 100%)`;
  }

  function setToggleAccessible1(currentTarget) {
    const toSlider1 = document.querySelector("#toSlider1");
    if (Number(currentTarget.value) <= 0) {
      toSlider1.style.zIndex = 2;
    } else {
      toSlider1.style.zIndex = 0;
    }
  }
}
