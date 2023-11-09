const starsElement = document.querySelectorAll(".fa-solid");
let rightDe = document.querySelector("#delE");
const emojisElement = document.querySelectorAll(".fa-regular");

starsElement.forEach((starElement, index) => {
  starElement.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  starsElement.forEach((starElement, idx) => {
    if (idx < index + 1) {
      starElement.classList.add("active");
    } else {
      starElement.classList.remove("active");
    }
  });
  emojisElement.forEach((emojiElement) => {
    emojiElement.style.transform = `translateX(-${index * 50}px)`;
  });
}
