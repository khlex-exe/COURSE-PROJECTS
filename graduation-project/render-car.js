// ===================== READ WHICH CAR WAS PICKED =====================
const params = new URLSearchParams(window.location.search);
const carId = params.get('car');
const car = cars[carId]; // `cars` comes from car-data.js, loaded before this file

if (!car) {
  // no match (bad/missing ?car= value) — don't leave a half-broken page up
  document.body.innerHTML = `
    <div style="min-height:100vh; display:flex; flex-direction:column;
                align-items:center; justify-content:center; text-align:center; gap:1rem;">
      <h1 style="font-family:'Oswald',sans-serif;">Car not found</h1>
      <a href="project.html" class="hero-btn">Back to garage</a>
    </div>`;
} else {
  fillPage(car);
  setUpScrollReveal();
}

// ===================== FILL THE TEMPLATE =====================
function fillPage(car) {
  // --- hero ---
  const carImage = document.getElementById('car-image');
  carImage.src = car.image;
  carImage.alt = car.name;

  document.getElementById('car-brand').textContent = car.brand;
  document.getElementById('car-name').textContent = car.name;
  document.getElementById('car-meta').textContent =
    `${car.year} · ${car.category} · ${car.power}`;

  document.title = `The Garage — ${car.brand} ${car.name}`;

  

  // --- video (section 3) ---
  const videoSection = document.getElementById('video-section');
  if (car.video) {
    const videoEl = document.getElementById('reveal-video');
    videoEl.src = car.video;
  } else {
    videoSection.style.display = 'none';
  }

  // --- 3D model (section 4) ---
  const modelSection = document.getElementById('model-section');
  if (car.model3d) {
    document.getElementById('reveal-model').setAttribute('src', car.model3d);
    document.getElementById('reveal-model').setAttribute(
      'alt', `3D model of ${car.brand} ${car.name}`
    );
  } else {
    modelSection.style.display = 'none';
  }

  // --- specs (section 5) ---
  document.getElementById('specs-name').textContent = `${car.brand} ${car.name}`;
  document.getElementById('specs-desc').textContent = car.longDesc;

  const specsList = document.getElementById('specs-list');
  const specs = {
    Year: car.year,
    Category: car.category,
    Power: car.power,
    Drivetrain: car.drive,
    Price: car.price,
    rental: car.rental
  };

  for (const [label, value] of Object.entries(specs)) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${label}</strong>${value}`;
    specsList.appendChild(li);
  }
}

// ===================== SCROLL REVEAL =====================
function setUpScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-video, .reveal-model');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  revealEls.forEach(el => observer.observe(el));
}

// ===================== PURCHASE / RENT DIALOG =====================
function setUpDeals(car) {
  const dialog    = document.getElementById('dealDialog');
  const form      = document.getElementById('dealForm');
  const done      = document.getElementById('dealDone');
  const rentBox   = document.getElementById('rentFields');
  const dateFrom  = document.getElementById('dateFrom');
  const dateTo    = document.getElementById('dateTo');
  const totalEl   = document.getElementById('dealTotal');

  const money  = n => '$' + n.toLocaleString('en-US');
  const perDay = Number(car.rental.replace(/[^0-9.]/g, '')); // "$1,299 / day" -> 1299
  let mode = 'purchase';

  function rentDays() {
    if (!dateFrom.value || !dateTo.value) return 0;
    const diff = (new Date(dateTo.value) - new Date(dateFrom.value)) / 86400000;
    return diff >= 0 ? Math.max(1, Math.round(diff)) : 0; // same-day counts as 1 day
  }

  function updateTotal() {
    if (mode === 'purchase') { totalEl.textContent = `Price: ${car.price}`; return; }
    const days = rentDays();
    totalEl.textContent = days
      ? `${days} day${days > 1 ? 's' : ''} × ${money(perDay)} = ${money(days * perDay)}`
      : 'Choose your dates to see the total';
  }

  function open(newMode) {
    mode = newMode;
    const isRent = mode === 'rent';
    form.reset();
    form.hidden = false;
    done.hidden = true;
    rentBox.hidden = !isRent;
    dateFrom.required = dateTo.required = isRent; // hidden required inputs would block submit

    const today = new Date().toISOString().split('T')[0];
    dateFrom.min = dateTo.min = today;

    document.getElementById('dealTitle').textContent   = isRent ? 'Rent this car' : 'Purchase this car';
    document.getElementById('dealSummary').textContent = `${car.brand} ${car.name} · ${isRent ? car.rental : car.price}`;
    document.getElementById('dealSubmit').textContent  = isRent ? 'Request rental' : 'Request purchase';
    updateTotal();
    dialog.showModal();
  }

  dateFrom.addEventListener('change', () => { dateTo.min = dateFrom.value; updateTotal(); });
  dateTo.addEventListener('change', updateTotal);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (mode === 'rent' && !rentDays()) {
      totalEl.textContent = 'Return date must be after pick-up';
      return;
    }
    const name = document.getElementById('dealName').value.trim();
    document.getElementById('dealDoneText').textContent = mode === 'rent'
      ? `Thanks ${name}! We'll call you to confirm your ${car.name} rental (${totalEl.textContent}).`
      : `Thanks ${name}! We'll call you about purchasing the ${car.name}.`;
    form.hidden = true;
    done.hidden = false;
  });

  document.getElementById('purchaseBtn').addEventListener('click', () => open('purchase'));
  document.getElementById('rentBtn').addEventListener('click', () => open('rent'));
  document.getElementById('dealClose').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); }); // backdrop click
}



// mobile view
// add near the top of render-car.js
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));