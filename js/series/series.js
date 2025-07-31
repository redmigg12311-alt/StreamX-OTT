document.addEventListener("DOMContentLoaded", () => {
    const seriesGrid = document.getElementById("series-grid");
    const slidesContainer = document.querySelector(".slides");
    const heroTitle = document.getElementById("hero-title");
    const heroMeta = document.getElementById("hero-meta");
    const heroDescription = document.getElementById("hero-description");

    const modal = document.getElementById("series-modal");
    const modalSeriesInfo = document.getElementById("modal-series-info");
    const modalSeasons = document.getElementById("modal-seasons");
    const closeModal = document.getElementById("closeModal");

    let currentSlideIndex = 0;

    // === 1. Populate Series Grid ===
    function renderSeriesGrid() {
        seriesData.forEach(series => {
            const card = document.createElement("div");
            card.className = "series-card";
            card.innerHTML = `
                <img src="${series.thumbnail}" alt="${series.title} Poster">
                <div class="card-title">${series.title}</div>
            `;
            card.addEventListener("click", () => openModal(series));
            seriesGrid.appendChild(card);
        });
    }

    // === 2. Populate Hero Slideshow ===
    function renderSlides() {
        seriesData.forEach((series, index) => {
            const slide = document.createElement("div");
            slide.className = "slide";
            slide.dataset.index = index;
            slide.innerHTML = `
                <img src="${series.banner}" alt="${series.title} Banner">
            `;
            slidesContainer.appendChild(slide);
        });
        updateHeroContent(0);
        highlightCurrentSlide();
    }

    function updateHeroContent(index) {
        const series = seriesData[index];
        heroTitle.textContent = series.title;
        heroMeta.textContent = `${series.genre} | ${series.language}`;
        heroDescription.textContent = series.description;
    }

    function highlightCurrentSlide() {
        document.querySelectorAll(".slide").forEach((slide, idx) => {
            slide.style.display = idx === currentSlideIndex ? "block" : "none";
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

    // === 3. Open Modal with Details ===
    function openModal(series) {
        modal.classList.remove("hidden");
        modalSeriesInfo.innerHTML = `
            <h2 id="modal-series-title">${series.title}</h2>
            <p><strong>Genre:</strong> ${series.genre}</p>
            <p><strong>Language:</strong> ${series.language}</p>
            <p>${series.description}</p>
        `;

        // Render seasons
        modalSeasons.innerHTML = "";
        if (series.seasons && series.seasons.length > 0) {
            series.seasons.forEach((season, i) => {
                const seasonDiv = document.createElement("div");
                seasonDiv.className = "season";
                seasonDiv.innerHTML = `<h3>Season ${i + 1}</h3>`;

                season.episodes.forEach(episode => {
                    const epDiv = document.createElement("div");
                    epDiv.className = "episode";
                    epDiv.innerHTML = `
                        <p><strong>${episode.title}</strong> - ${episode.duration}</p>
                    `;
                    seasonDiv.appendChild(epDiv);
                });

                modalSeasons.appendChild(seasonDiv);
            });
        } else {
            modalSeasons.innerHTML = "<p>No seasons available.</p>";
        }

        modalSeriesInfo.focus();
    }

    // === 4. Close Modal ===
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    // === 5. Initialize ===
    renderSeriesGrid();
    renderSlides();
});
