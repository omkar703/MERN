const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomBackground =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  box.style.color = randomColor;
  box.style.backgroundColor = randomBackground;
});
