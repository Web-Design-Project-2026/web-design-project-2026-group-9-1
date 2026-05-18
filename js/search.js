const input = document.querySelector(".search-container input");
const historyContainer = document.querySelector(".history");

let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];

renderHistory();

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = input.value.trim();
    if (value === "") return;

    addSearch(value);
    input.value = "";
  }
});

function addSearch(term) {
  searchHistory.unshift(term);

  searchHistory = searchHistory.slice(0, 10);

  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

  renderHistory();
}

function renderHistory() {
  historyContainer.innerHTML = "";

  searchHistory.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("history-item");

    div.innerHTML = `
      <i class="fa-solid fa-clock-rotate-left"></i>
      <span>${item}</span>
    `;

    div.addEventListener("click", () => {
      input.value = item;
    });

    historyContainer.appendChild(div);
  });
}