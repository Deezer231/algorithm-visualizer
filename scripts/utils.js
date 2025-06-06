export let inputArray = [];
export let animationSpeed = 300;

export function parseAndStoreInput(inputId = "custom-input") {
  const rawInput = document.getElementById(inputId).value;
  const parsed = rawInput.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));

  if (parsed.length < 2) {
    alert("Please enter at least two numbers separated by commas.");
    return false;
  }

  inputArray = parsed;
  return true;
}

export function renderArray(arr = inputArray, highlightIndices = []) {
  const container = document.getElementById("visualization-area");
  container.innerHTML = "";

  const max = Math.max(...arr);

  arr.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");

    bar.style.height = `${(value / max) * 100}%`;
    bar.style.width = `${100 / arr.length}%`;
    bar.textContent = value;

    bar.style.display = "flex";
    bar.style.alignItems = "flex-end";
    bar.style.justifyContent = "center";
    bar.style.fontSize = "0.8em";
    bar.style.margin = "1px";
    bar.style.color = "white";
    bar.style.backgroundColor = highlightIndices.includes(index) ? "yellow" : "red";

    container.appendChild(bar);
  });
}

export function getInputArray() {
  return inputArray.slice(); // Return a copy
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function setSpeedFromSlider() {
  const slider = document.getElementById("speed-slider");
  if (slider) {
    animationSpeed = parseInt(slider.value);
  }
}
