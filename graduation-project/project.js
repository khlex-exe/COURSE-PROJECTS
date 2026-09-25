// ===================== CAR COUNT =====================
document.querySelector('.garage-heading span').textContent = 
  document.querySelectorAll('.car-card').length + ' cars';

// ===================== FILTER =====================
const select = document.getElementById('garage-btn');
const cards = document.querySelectorAll('.car-card');

function hideCard(card) {
  card.classList.add('hidden');   // starts the fade — that's all this does now
}

function showCard(card) {
  card.style.display = '';         // put it back in the grid...
  card.classList.remove('hidden'); // ...then let CSS fade it in
}

// ONE listener per card, set up once — never re-created on every filter change
cards.forEach(card => {
  card.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'opacity') return;
    // only pull it out of the grid if it's STILL supposed to be hidden right now
    if (card.classList.contains('hidden')) {
      card.style.display = 'none';
    }
  });
});

select.onchange = function() {
  cards.forEach(card => {
    if (select.value === 'all' || card.dataset.category === select.value) {
      showCard(card);
    } else {
      hideCard(card);
    }
  });
};

// ===================== MODAL =====================
const grid = document.querySelector('.car-grid');
const modal = document.getElementById('carModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalPlate = document.getElementById('modalPlate');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.car-card');
  if (!card) return;

  modalImg.src = card.querySelector('img').src;
  modalImg.alt = card.querySelector('img').alt;
  modalName.textContent = card.querySelector('h3').textContent;
  modalPlate.textContent = card.querySelector('.car-plate').textContent;
  modalMeta.textContent = card.querySelector('.car-meta').textContent;
  modalDesc.textContent = card.dataset.desc || '';

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
});

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');


navToggle.addEventListener('click',function(){
  navLinks.classList.toggle('open');
})



















