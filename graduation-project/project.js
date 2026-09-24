document.querySelector('.garage-heading span').textContent = 
  document.querySelectorAll('.car-card').length + ' cars';


 const select = document.getElementById('garage-btn');
const cards = document.querySelectorAll('.car-card');

select.onchange = function() {
  cards.forEach(card => {
    if (select.value === 'all' || card.dataset.category === select.value) {
      card.style.display = 'block';   // show it
     } 
     else {
      card.style.display = 'none';    // hide it
    }
  });
};





const grid = document.querySelector('.car-grid');
const modal = document.getElementById('carModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalPlate = document.getElementById('modalPlate');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

// ONE listener on the whole grid, not one per card
grid.addEventListener('click', (e) => {
  const card = e.target.closest('.car-card');
  if (!card) return; // clicked the grid's empty space, not a card

  // read the info straight off the card that was clicked — no duplicating it
  modalImg.src = card.querySelector('img').src;
  modalImg.alt = card.querySelector('img').alt;
  modalName.textContent = card.querySelector('h3').textContent;
  modalPlate.textContent = card.querySelector('.car-plate').textContent;
  modalMeta.textContent = card.querySelector('.car-meta').textContent;
  modalDesc.textContent = card.dataset.desc || '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // stop background from scrolling
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

// click on the dark backdrop (not the box itself) also closes it
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
















