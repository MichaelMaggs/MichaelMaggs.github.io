const searchInput = document.getElementById('doc-search');
const topicCards = [...document.querySelectorAll('.topic-card')];
const yearNode = document.getElementById('year');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase();

    topicCards.forEach((card) => {
      const match = card.dataset.topic.toLowerCase().includes(query);
      card.classList.toggle('hidden', query && !match);
    });
  });
}
