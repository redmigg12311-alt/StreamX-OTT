document.addEventListener("DOMContentLoaded", function () {
  // Inject header
  document.getElementById("header-placeholder").innerHTML = `
    <header class="main-header glass">
      <div class="logo">StreamX</div>
      <nav class="menu" id="glassMenu">
        <a href="index.html">Home</a>
        <a href="livetv.html" class="active">Live TV</a>
        <a href="#">Movies</a>
        <a href="#">Web Series</a>
      </nav>
      <div class="hamburger" id="menuToggle">
        <span class="material-icons-outlined">menu</span>
      </div>
    </header>
  `;

  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const glassMenu = document.getElementById("glassMenu");

  menuToggle.addEventListener("click", () => {
    glassMenu.classList.toggle("active");
  });
});
