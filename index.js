const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll",checkBoxes);
document.querySelector(".info-icon").addEventListener("click",redirect);

function checkBoxes() {
  const triggerPoint = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerPoint)
    {
      box.classList.add("show");
    }

    else
    {
      box.classList.remove("show");
    }
  });
}

function redirect() {
  location.href = "https://github.com/bradtraversy/50projects50days"; 
}
