import {
    parseAndStoreInput,
    renderArray,
    getInputArray,
    setSpeedFromSlider
  } from './utils.js';
  import { bubbleSort } from './sorting.js';
  
  const startBtn = document.getElementById("start-btn");
  const submitArrayBtn = document.getElementById("submit-array");
  const algoSelect = document.getElementById("algorithm-select");
  const speedSlider = document.getElementById("speed-slider");
  const speedValue = document.getElementById("speed-value");
  
  submitArrayBtn.addEventListener("click", () => {
    if (parseAndStoreInput()) {
      renderArray();
    }
  });
  
  startBtn.addEventListener("click", async () => {
    if (!parseAndStoreInput()) return;
    setSpeedFromSlider();
    renderArray();
  
    const arr = getInputArray();
    const algo = algoSelect.value;
  
    if (algo === "bubble") await bubbleSort(arr);
  });
  
  speedSlider.addEventListener("input", () => {
    speedValue.textContent = `${speedSlider.value} ms`;
  });
  