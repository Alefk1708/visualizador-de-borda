const slider = document.getElementById("borderSlider");
const box = document.getElementById("box");
const valueDisplay = document.getElementById("borderValue");
const valueStyle = document.getElementById("styleChange")
const valueColor = document.getElementById("color")
const radiusSlider = document.getElementById("radiusSlider")
const valueRadiusDisplay = document.getElementById("borderRadius")

slider.addEventListener("input", () => {
  const borderWidth = slider.value + "px";
  box.style.borderWidth = borderWidth;
  valueDisplay.textContent = borderWidth;
});

valueStyle.addEventListener("change", () => {
    const borderStyle = valueStyle.value
    box.style.borderStyle = borderStyle
})

valueColor.addEventListener("input", () => {
  const borderColor = valueColor.value
  box.style.borderColor = borderColor
})

radiusSlider.addEventListener("input", () => {
  const borderRadius = radiusSlider.value + "px"
  box.style.borderRadius = borderRadius
  valueRadiusDisplay.textContent = borderRadius
})