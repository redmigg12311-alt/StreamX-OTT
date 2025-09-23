document.addEventListener("DOMContentLoaded", () => {
  // Load header and footer templates dynamically
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });

  const seriesGridContainer = document.getElementById("series-grid");
  const slidesContainer = document.querySelector(".slides");
  const heroTitle = document.getElementById("hero-title");
  const heroMeta = document.getElementById("hero-meta");
  const heroDescription = document.getElementById("hero-description");

  const modal = document.getElementById("series-modal");
  const modalSeriesInfo = document.getElementById("modal-series-info");
  const modalSeasons = document.getElementById("modal-seasons");
  const closeModalBtn = document.getElementById("closeModal");

  let currentSlideIndex = 0;

  // Group series by category
  const seriesByCategory = seriesData.reduce((acc, series) => {
    const category = series.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(series);
    return acc;
  }, {});

  // Render series grouped by category in horizontal scrollable rows
  function renderSeriesByCategory() {
    seriesGridContainer.innerHTML = "";

    for (const [category, seriesList] of Object.entries(seriesByCategory)) {
      // Category Title
      const categoryTitle = document.createElement("h2");
      categoryTitle.className = "genre-title";
      categoryTitle.textContent = category;
      seriesGridContainer.appendChild(categoryTitle);

      // Category section
      const categorySection = document.createElement("section");
      categorySection.className = "category-section";

      // Grid wrapper (horizontal scroll)
      const gridWrapper = document.createElement("div");
      gridWrapper.className = "grid-wrapper";

      // Flex container for cards
      const grid = document.createElement("div");
      grid.className = "grid";

      // Append series cards
      seriesList.forEach((series) => {
        const card = document.createElement("div");
        card.className = "series-card";
        card.tabIndex = 0;

        // Calculate totals
        const totalSeasons = Array.isArray(series.seasons) ? series.seasons.length : 0;
        const totalEpisodes = Array.isArray(series.seasons)
          ? series.seasons.reduce((sum, s) => sum + (s.episodes ? s.episodes.length : 0), 0)
          : 0;

        card.innerHTML = `
          <img src="${series.thumbnail}" alt="${series.title} Poster" loading="lazy" />
          <div class="overlay-info">
            <div class="overlay-name">${series.title}</div>
            <div class="overlay-details">
              ${totalSeasons > 0 ? `${totalSeasons} Season${totalSeasons > 1 ? "s" : ""}` : ""}
              ${totalEpisodes > 0 ? ` • ${totalEpisodes} Episode${totalEpisodes > 1 ? "s" : ""}` : ""}
            </div>
          </div>
        `;

        card.addEventListener("click", () => openModal(series));
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal(series);
          }
        });
        grid.appendChild(card);
      });

      gridWrapper.appendChild(grid);
      categorySection.appendChild(gridWrapper);
      seriesGridContainer.appendChild(categorySection);
    }
  }

  // Hero Slideshow
  function renderSlides() {
    slidesContainer.innerHTML = "";
    seriesData.forEach((series, index) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      if (index === 0) slide.classList.add("active");
      slide.dataset.index = index;
      slide.innerHTML = `<img src="${series.banner}" alt="${series.title} Banner" loading="lazy" />`;
      slidesContainer.appendChild(slide);
    });
    updateHeroContent(0);
  }

  function updateHeroContent(index) {
    const series = seriesData[index];
    heroTitle.textContent = series.title;
    const language = series.language || "Unknown Language";
    heroMeta.textContent = `${series.genre} | ${language}`;
    heroDescription.textContent = series.description;
  }

  function highlightCurrentSlide() {
    document.querySelectorAll(".slide").forEach((slide, idx) => {
      slide.classList.toggle("active", idx === currentSlideIndex);
    });
  }

  document.querySelector(".slide-btn.next").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % seriesData.length;
    updateHeroContent(currentSlideIndex);
    highlightCurrentSlide();
  });

  document.querySelector(".slide-btn.prev").addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + seriesData.length) % seriesData.length;
    updateHeroContent(currentSlideIndex);
    highlightCurrentSlide();
  });

  // Modal functionality with dropdown for seasons
  function openModal(series) {
    modal.classList.remove("hidden");

    modalSeriesInfo.innerHTML = `
      <h2 id="modal-series-title">${series.title}</h2>
      <p><strong>Genre:</strong> ${series.genre}</p>
      <p><strong>Language:</strong> ${series.language || "Unknown"}</p>
      <p><strong>Rating:</strong> ${series.rating}</p>
      <p><strong>Release Year:</strong> ${series.releaseyear}</p>
      <p>${series.description}</p>
    `;

    modalSeasons.innerHTML = "";

    if (Array.isArray(series.seasons) && series.seasons.length > 0) {
      // Dropdown HTML
      const dropdown = document.createElement("select");
      dropdown.className = "season-dropdown";
      series.seasons.forEach((season, i) => {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = season.name || `Season ${i + 1}`;
        dropdown.appendChild(option);
      });

      // Container for episodes
      const episodesContainer = document.createElement("div");
      episodesContainer.className = "episodes-container";

      // Function to render episodes for selected season
      function renderEpisodes(idx) {
        episodesContainer.innerHTML = ""; // Clear previous
        const season = series.seasons[idx];
        season.episodes.forEach((episode) => {
          const epDiv = document.createElement("div");
          epDiv.className = "episode";
          epDiv.tabIndex = 0;
          epDiv.innerHTML = `
            <img src="${episode.thumbnail || ""}" alt="${episode.title} Thumbnail" class="episode-thumb" loading="lazy" />
            <div class="episode-details">
              <div class="episode-title">${episode.title}</div>
              <div class="episode-desc">${episode.description || ""}</div>
            </div>
          `;

          function redirectToPlayer() {
            const url = new URL("streamxmovie.html", window.location.origin);
            url.searchParams.set("src", episode.src);
            url.searchParams.set("name", episode.title);
            window.open(url.toString(), "_blank"); // ✅ Open in new tab
          }

          epDiv.addEventListener("click", redirectToPlayer);
          epDiv.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              redirectToPlayer();
            }
          });
          episodesContainer.appendChild(epDiv);
        });
      }

      // Event: Change season selection
      dropdown.addEventListener("change", (e) => {
        renderEpisodes(e.target.value);
      });

      modalSeasons.appendChild(dropdown);
      modalSeasons.appendChild(episodesContainer);

      // Render episodes for the first season by default
      renderEpisodes(0);
    } else {
      modalSeasons.innerHTML = "<p>No seasons available.</p>";
    }

    modalSeriesInfo.focus();
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  closeModalBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // Initialization
  renderSeriesByCategory();
  renderSlides();
});
