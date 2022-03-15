const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = Math.trunc(window.innerHeight * 0.8);
  console.log(triggerBottom);
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    boxTop < triggerBottom
      ? box.classList.add("active")
      : box.classList.remove("active");
  });
}
