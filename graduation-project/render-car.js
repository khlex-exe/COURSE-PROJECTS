// ===================== READ WHICH CAR WAS PICKED =====================
const params = new URLSearchParams(window.location.search);
const carId = params.get('car');
const car = cars[carId]; // `cars` comes from cars-data.js, loaded before this file

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

  // --- reveal image (section 2) ---
  const revealSection = document.getElementById('reveal-section');
  if (car.image2) {
    document.getElementById('reveal-img').src = car.image2;
    document.getElementById('reveal-img').alt = car.name + ' detail shot';
  } else {
    revealSection.style.display = 'none';
  }

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
    Price: car.price
  };

  for (const [label, value] of Object.entries(specs)) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${label}</strong>${value}`;
    specsList.appendChild(li);
  }
}

// ===================== SCROLL REVEAL =====================
function setUpScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-img, .reveal-video, .reveal-model');

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