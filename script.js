const searchInput = document.getElementById('doc-search');
const productCards = [...document.querySelectorAll('.product-card')];
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (searchInput && productCards.length) {
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();

    productCards.forEach((card) => {
      const match = card.dataset.topic.toLowerCase().includes(query);
      card.classList.toggle('hidden', query && !match);
    });
  });
}
