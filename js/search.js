const input = document.querySelector(".search-container input");
const historyContainer = document.querySelector(".history");

const placeholderHistory = ["Kick off", "Web design books", "JU Patches"];
let searchHistory = [];
const savedHistory = localStorage.getItem("searchHistory");

if (savedHistory) {
  try {
    searchHistory = JSON.parse(savedHistory);
  } catch (error) {
    console.warn("Invalid searchHistory in localStorage, using placeholder history", error);
    searchHistory = placeholderHistory;
  }
}

if (!savedHistory || !Array.isArray(searchHistory) || searchHistory.length === 0) {
  searchHistory = placeholderHistory;
}

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
