function triangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  const triangleArea = 0.5 * base * height;
  setArea("triangle-area", triangleArea);
  clearOut("triangle-base", "triangle-height");
}

function rectangleArea() {
  const width = getInputValue("rectangle-width");
  const length = getInputValue("rectangle-length");
  const rectangleArea = width * length;
  setArea("rectangle-area", rectangleArea);
  clearOut("rectangle-width", "rectangle-length");
}

function parallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  const parallelogramArea = base * height;
  setArea("parallelogram-area", parallelogramArea);
  clearOut("parallelogram-base", "parallelogram-height");
}

function rhombusArea() {
  const d1 = getInputValue("rhombus-d1");
  const d2 = getInputValue("rhombus-d2");
  const rhombusArea = 0.5 * d1 * d2;
  setArea("rhombus-area", rhombusArea);
  clearOut("rhombus-d1", "rhombus-d2");
}

function pentagonArea() {
  const p = getInputValue("pentagon-p");
  const b = getInputValue("pentagon-b");
  const pentagonArea = 0.5 * p * b;
  setArea("pentagon-area", pentagonArea);
  clearOut("pentagon-p", "pentagon-b");
}

function ellipseArea() {
  const major = getInputValue("ellipse-major");
  const minor = getInputValue("ellipse-minor");
  const ellipseArea = 3.1416 * major * minor;
  setArea("ellipse-area", ellipseArea);
  clearOut("ellipse-major", "ellipse-minor");
}
