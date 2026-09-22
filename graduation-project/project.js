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