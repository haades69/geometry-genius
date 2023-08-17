function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValue = inputField.value;
  const value = parseFloat(inputValue);
  return value;
}
function setArea(fieldId, area) {
  const element = document.getElementById(fieldId);
  element.innerText = area;
}
function clearOut(fieldId1, fieldId2) {
  const inputField1 = document.getElementById(fieldId1);
  const inputField2 = document.getElementById(fieldId2);
  inputField1.value = "";
  inputField2.value = "";
}
