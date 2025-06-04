// === Click Event Logic ===
const userInput1 = document.querySelector("#userInput1");
const copyBtn = document.querySelector("#copy");
const output1 = document.querySelector("#output1");

// Defensive check in case DOM fails to load elements
if (copyBtn && userInput1 && output1) {
  copyBtn.addEventListener("click", () => {
    output1.textContent = userInput1.value;
  });
}

// === Input Event Logic ===
const userInput2 = document.querySelector("#userInput2");
const output2 = document.querySelector("#output2");

// Update the live output as user types
if (userInput2 && output2) {
  userInput2.addEventListener("input", () => {
    output2.textContent = userInput2.value;
  });
}
