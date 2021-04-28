const shareBtn = document.querySelector(".share__btn");
shareBtn.addEventListener("click", () => {
  return shareBtn.nextElementSibling.classList.contains("share-tooltip--hidden")
    ? shareBtn.nextElementSibling.classList.remove("share-tooltip--hidden")
    : shareBtn.nextElementSibling.classList.add("share-tooltip--hidden");
});