import "../scss/app.scss";
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = (n) => n % 2 === 0;
  const filteredArray = numbersArray.filter(isEven);
  for (const number of filteredArray) {
    let li = document.createElement("li")
    li.textContent = number
    ul.appendChild(li)
  }
});
