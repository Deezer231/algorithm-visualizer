import { sleep, renderArray, animationSpeed } from './utils.js';

export async function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        renderArray(arr, [j, j + 1]);
        await sleep(animationSpeed);
      } else {
        renderArray(arr, [j, j + 1]); // Show comparison even if no swap
        await sleep(animationSpeed);
      }
    }
  }

  renderArray(arr); // Final draw without highlights
}
