// HTML include loader
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(async el => {
    const file = el.getAttribute("data-include");
    const page = await fetch(file).then(res => res.text());
    el.innerHTML = page;
  });
});

// Section switcher
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".sidebar button").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

// Chart.js
document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('userChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Users',
          data: [220, 215, 120, 80, 150, 130, 140, 160, 180, 120, 150, 170],
          backgroundColor: '#fff',
          borderRadius: 5,
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { color: '#ccc' }, grid: { display: false } },
          y: { ticks: { color: '#ccc' }, grid: { color: '#444' } }
        }
      }
    });
  }
});
