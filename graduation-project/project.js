// ===================== FILTER =====================
const select = document.getElementById('garage-btn');
const cards = document.querySelectorAll('.car-card');
  let currentlyOpenId = null ;
  let favs = JSON.parse( localStorage.getItem('favs') || '[]' );


// ===================== CAR COUNT =====================
function updateCount() {
  const visible = [...cards].filter(c => !c.classList.contains('hidden')).length;
  document.querySelector('.garage-heading span').textContent = visible + (visible === 1 ? ' car' : ' cars');
}

function hideCard(card) {
  card.classList.add('hidden');   // starts the fade
}

function toggleLike(id){

  if(!(favs.includes(id))){
    favs.push(id)
  }
  else{
  favs = favs.filter(carid => carid !== id)
  }

  localStorage.setItem('favs', JSON.stringify(favs))
}

function showCard(card) {
  card.style.display = '';         // put it back in the grid...
  card.classList.remove('hidden'); // ...then let CSS fade it in
}

// ONE listener per card, set up once
cards.forEach(card => {
  card.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'opacity') return;
    if (card.classList.contains('hidden')) {
      card.style.display = 'none';
    }
  });
});

select.onchange = function() {
  cards.forEach(card => {
    let matches;

    if (select.value === 'all') {
      matches = true;
    } else if (select.value === 'favs') {
      matches = favs.includes(card.dataset.id);
    } else {
      matches = card.dataset.category.toLowerCase() === select.value.toLowerCase();
    }

    if (matches) {
      showCard(card);
    } else {
      hideCard(card);
    }
  });

  updateCount();   // ← refreshes the count after every filter change
};



updateCount();     // ← sets the initial "12 cars" on page load

// ===================== MODAL =====================
const grid = document.querySelector('.car-grid');
const modal = document.getElementById('carModal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalPlate = document.getElementById('modalPlate');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');
const modalPreview = document.querySelector('.modal-box a');
const heartBtn = document.querySelector('.heart-btn'); //!THIS

const heartIcon = heartBtn.querySelector('i');

function renderHeart() {
  const liked = favs.includes(currentlyOpenId);
  heartIcon.classList.toggle('bi-heart',      !liked);
  heartIcon.classList.toggle('bi-heart-fill',  liked);
}



grid.addEventListener('click', (e) => {
  const card = e.target.closest('.car-card');
  if (!card) return;
  const car = cars[card.dataset.id];
  currentlyOpenId = card.dataset.id;


  modalImg.src = card.querySelector('img').src;
  modalImg.alt = card.querySelector('img').alt;
  modalName.textContent = card.querySelector('h3').textContent;
  modalPlate.textContent = card.querySelector('.car-plate').textContent;
  modalMeta.textContent = card.querySelector('.car-meta').textContent;
  modalDesc.textContent = car?.longDesc || card.dataset.desc || '';
  modalPreview.href = 'car-detail.html?car=' + card.dataset.id;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  renderHeart();   // ← add this
});

heartBtn.addEventListener('click', () => {
  toggleLike(currentlyOpenId);   // uses whatever's currently remembered
   renderHeart();   // ← add this

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

// ===================== MOBILE NAV =====================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});




