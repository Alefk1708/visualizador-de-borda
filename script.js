const slider = document.getElementById("borderSlider");
const box = document.getElementById("box");
const valueDisplay = document.getElementsByClassName("borderValue");
const valueStyle = document.getElementById("styleChange");
const valueStyleDisplay = document.getElementById("styleDisplay")
const valueColor = document.getElementById("color");
const valueColorDisplay = document.getElementById("colorDisplay")
const radiusSlider = document.getElementById("radiusSlider");
const valueRadiusDisplay = document.getElementsByClassName("borderRadius");
const copy = document.getElementById("copy") 
const text = document.getElementById("cssCode")

slider.addEventListener("input", () => {
  const borderWidth = slider.value + "px";
  box.style.borderWidth = borderWidth;
  for (let i = 0; i < valueDisplay.length; i++) {
    valueDisplay[i].textContent = borderWidth
  }
});

valueStyle.addEventListener("change", () => {
  box.style.borderStyle = valueStyle.value;
  valueStyleDisplay.textContent = valueStyle.value
});

valueColor.addEventListener("input", () => {
  box.style.borderColor = valueColor.value;
  valueColorDisplay.textContent = valueColor.value
});

radiusSlider.addEventListener("input", () => {
  const borderRadius = radiusSlider.value + "px";
  box.style.borderRadius = borderRadius;
  for (let i = 0; valueRadiusDisplay.length; i++) {
    valueRadiusDisplay[i].textContent = borderRadius;
  }
});

copy.addEventListener("click", () => {
  const textToCopy = text.innerText

  navigator.clipboard.writeText(textToCopy)
  .then(() => {
    alert("CSS copiado com sucesso!")
  })
  .catch(err => {
    console.error("Erro ao copiar:", err)
  })
})