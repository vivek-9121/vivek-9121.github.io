//ITMD 540 Vivek Sirikonda
// Lab 5
// DOM elements
// This code calculates the total bill amount including tax and tip, and converts it to a selected currency.
const billInput = document.getElementById("bill_total");
const tipInput = document.getElementById("tip");
const taxOutput = document.getElementById("bill_total_withTax");
const currencySelect = document.getElementById("currency");
const convertedTipOutput = document.getElementById("converted");
const totalConvertedOutput = document.getElementById("converted_tax");
const errorMessage = document.getElementById("error");

// Conversion rates
const conversionRates = {
  Euro: 0.95,
  Rupee: 85,
  Dollars: 1,
};

// Validate and calculate
function handleInputChange() {
  const billAmount = parseFloat(billInput.value);

  // Validation
  if (!billInput.value) {
    errorMessage.textContent = "";
    clearOutputs();
    return;
  }

  if (isNaN(billAmount) || billAmount < 0) {
    errorMessage.textContent = "Please enter a valid positive number for the bill total.";
    clearOutputs();
    return;
  }

  errorMessage.textContent = "";

  const billWithTax = calculateTax(billAmount);
  taxOutput.value = billWithTax.toFixed(2);

  const tipPercent = parseFloat(tipInput.value);
  const tipAmount = calculateTip(billWithTax, tipPercent);
  const selectedCurrency = currencySelect.value;

  const convertedTip = convertAmount(tipAmount, selectedCurrency);
  const convertedTotal = convertAmount(billWithTax, selectedCurrency) + convertedTip;

  convertedTipOutput.value = convertedTip.toFixed(2);
  totalConvertedOutput.value = convertedTotal.toFixed(2);
}

// Helpers
function calculateTax(amount) {
  const taxRate = 11; // 11%
  return amount + (amount * taxRate) / 100;
}

function calculateTip(totalWithTax, tipPercent) {
  return (totalWithTax * tipPercent) / 100;
}

function convertAmount(amount, currency) {
  const rate = conversionRates[currency] || 1;
  return amount * rate;
}

function clearOutputs() {
  taxOutput.value = "";
  convertedTipOutput.value = "";
  totalConvertedOutput.value = "";
}

// Event listeners
[billInput, tipInput, currencySelect].forEach(input =>
  input.addEventListener("input", handleInputChange)
);
