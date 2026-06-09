document.addEventListener("DOMContentLoaded", () => {
  setupFilterEvents();
});

function setupFilterEvents() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".pokemon-card");
  const countEl = document.getElementById("result-count");

  function applyFilters() {
    const activeType = document.querySelector(".filter-btn.active")?.dataset.type ?? "all";
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const typeMatch = activeType === "all" || card.dataset.types.split(" ").includes(activeType);
      const searchMatch = !query || card.dataset.name.includes(query) || card.dataset.id.includes(query);

      if (typeMatch && searchMatch) {
        card.style.display = "";
        visible++;
      } else {
        card.style.display = "none";
      }
    });

    if (countEl) countEl.textContent = `${visible}개 결과`;
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilters();
    });
  });

  searchInput.addEventListener("input", applyFilters);
}

