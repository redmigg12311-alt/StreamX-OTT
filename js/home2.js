// Wait for DOM and external scripts to load
document.addEventListener("DOMContentLoaded", () => {
  // Assign channels and movies from window after external JS execution
  const channels = window.channels || [];
  const movies = window.movies || [];

  // Static data defined here
  const series = [
    {
      title: "Stranger Things",
      genre: "Sci-fi, Horror",
      thumbnail: "https://wallpapers.com/images/hd/stranger-things-poster.jpg",
      url: "#"
    },
    {
      title: "Mirzapur",
      genre: "Crime, Drama",
      thumbnail: "https://static.moviecrow.com/gallery/20231114/215825-MirzapurS3.jpg",
      url: "#"
    }
  ];

  const sports = [
    {
      title: "FIFA World Cup",
      genre: "Football",
      thumbnail:
        "https://qqcdnpictest.mxplay.com/pic/7c68d12003e8a93fbc1a6d8f907fb0bd/en/2x3/320x480/efaf6eda390b2706d526813158ab2f79_1280x1920.webp",
      url: "#"
    },
    {
      title: "IPL 2025",
      genre: "Cricket",
      thumbnail:
        "https://qqcdnpictest.mxplay.com/pic/7c68d12003e8a93fbc1a6d8f907fb0bd/en/2x3/320x480/efaf6eda390b2706d526813158ab2f79_1280x1920.webp",
      url: "#"
    }
  ];

  const historyKey = "watchHistory";

  // -----------------------------
  // 🎞️ Card Generator
  // -----------------------------
  function createPosterCard(item) {
    const card = document.createElement("a");
    card.className = "movie-card";
    card.href = item.url || "#";
    card.target = "_blank";

    const title = item.title || item.name || "";
    const genre = item.genre || item.category || "";
    const imgSrc = item.thumbnail || item.logo || "";

    card.innerHTML = `
      <img src="${imgSrc}" alt="${title}" />
      <div class="overlay">
        <div class="overlay-content">
          <div>${title}</div>
          <div class="badge category">${genre}</div>
        </div>
      </div>
    `;

    card.addEventListener("click", () => addToHistory(item));
    return card;
  }

  // -----------------------------
  // 🧱 Grid Populator
  // -----------------------------
  function populateGrid(gridId, items) {
    const grid = document.getElementById(gridId);
    if (!grid || !Array.isArray(items)) return;
    grid.innerHTML = "";
    items.forEach((item) => grid.appendChild(createPosterCard(item)));
  }

  // -----------------------------
  // ⏱️ Watch History Functions
  // -----------------------------
  function addToHistory(item) {
    let history = JSON.parse(localStorage.getItem(historyKey)) || [];
    history = history.filter((i) => i.title !== item.title); // remove duplicates
    history.unshift(item); // add to top
    if (history.length > 20) history.pop(); // limit to 20
    localStorage.setItem(historyKey, JSON.stringify(history));
  }

  function loadHistory() {
    const history = JSON.parse(localStorage.getItem(historyKey)) || [];
    populateGrid("historyGrid", history);
  }

  // -----------------------------
  // 🚀 INIT - Load Header/Footer and Populate Grids
  // -----------------------------
  // Load header and footer HTML
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load header:", err));

  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((err) => console.error("Failed to load footer:", err));

  // Populate content grids
  populateGrid("liveTvGrid", channels);
  populateGrid("moviesGrid", movies);
  populateGrid("seriesGrid", series);
  populateGrid("sportsGrid", sports);
  loadHistory();
});
