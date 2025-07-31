window.addEventListener("DOMContentLoaded", () => {
  // Load header and footer templates dynamically
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });

  // Hero video and image logic for smooth thumbnail to video transition:
  const video = document.getElementById("hero-video");
  const img = document.getElementById("hero-image");

  if (video) {
    video.muted = true;
    video.play().catch(() => { /* ignore autoplay errors */ });
    video.style.opacity = "0"; // hide video initially
    video.pause();
  }

  setTimeout(() => {
    if (img) img.style.opacity = "0";
    setTimeout(() => {
      if (video) {
        video.style.opacity = "1";
        if (video.paused) video.play();
      }
    }, 1000);
  }, 3000);

  // Mute toggle button logic
  const muteToggle = document.getElementById("muteToggle");
  if (muteToggle) {
    muteToggle.addEventListener("click", () => {
      if (!video) return;
      video.muted = !video.muted;
      muteToggle.textContent = video.muted ? "volume_off" : "volume_up";
    });
  }

  // Populate genres and movies, setup filtering and rendering
  const container = document.getElementById("movie-sections");
  const filter = document.getElementById("genreFilter");
  const grouped = {};
  const genres = new Set();

  movies.forEach(movie => {
    const genre = movie.genre || "Other";
    genres.add(genre);
    if (!grouped[genre]) grouped[genre] = [];
    grouped[genre].push(movie);
  });

  genres.forEach(g => {
    const option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    filter.appendChild(option);
  });

  function renderMovies(selected) {
    container.innerHTML = "";
    const keys = selected === "All" ? Object.keys(grouped) : [selected];
    keys.forEach(genre => {
      const section = document.createElement("div");
      section.className = "category-section";

      section.innerHTML = `<h2 class="genre-title">${genre} Movies</h2>`;

      const gridWrapper = document.createElement("div");
      gridWrapper.className = "grid-wrapper";

      const grid = document.createElement("div");
      grid.className = "grid";

      grid.innerHTML = grouped[genre]
        .map(movie => `
          <a href="${movie.url}" class="movie-card" target="_blank">
            <img src="${movie.thumbnail}" alt="${movie.title}" />
            <div class="overlay">
              <div class="overlay-content">
                <div>${movie.title}</div>
                <div>${movie.description}</div>
                <div class="badge category">${movie.category}</div>
              </div>
            </div>
          </a>
        `)
        .join("");

      gridWrapper.appendChild(grid);
      section.appendChild(gridWrapper);
      container.appendChild(section);
    });

    addGridScrollButtons();
  }

  filter.addEventListener("change", e => renderMovies(e.target.value));
  renderMovies("All");

  // Add floating scroll buttons for the carousels
  function addGridScrollButtons() {
    document.querySelectorAll(".grid-wrapper").forEach(wrapper => {
      const grid = wrapper.querySelector(".grid");
      if (!grid) return;

      wrapper.querySelectorAll(".grid-scroll-btn").forEach(btn => btn.remove());

      if (grid.scrollWidth <= grid.clientWidth + 1) return;

      const leftBtn = document.createElement("button");
      leftBtn.className = "grid-scroll-btn left-btn";
      leftBtn.setAttribute("aria-label", "Scroll Left");
      leftBtn.innerHTML = `<span class="material-icons">chevron_left</span>`;

      const rightBtn = document.createElement("button");
      rightBtn.className = "grid-scroll-btn right-btn";
      rightBtn.setAttribute("aria-label", "Scroll Right");
      rightBtn.innerHTML = `<span class="material-icons">chevron_right</span>`;

      leftBtn.addEventListener("click", () => {
        grid.scrollBy({ left: -grid.clientWidth * 0.85, behavior: "smooth" });
        setTimeout(updateButtons, 400);
      });

      rightBtn.addEventListener("click", () => {
        grid.scrollBy({ left: grid.clientWidth * 0.85, behavior: "smooth" });
        setTimeout(updateButtons, 400);
      });

      function updateButtons() {
        leftBtn.disabled = grid.scrollLeft < 10;
        rightBtn.disabled = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10;
      }

      wrapper.appendChild(leftBtn);
      wrapper.appendChild(rightBtn);

      updateButtons();

      grid.addEventListener("scroll", updateButtons);
      window.addEventListener("resize", updateButtons);
    });
  }
});
