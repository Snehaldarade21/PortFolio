// Skills skill-bar animation
function openModal(idx) {
  document.getElementById('modal-' + idx).classList.add('active');
}
function closeModal(idx) {
  document.getElementById('modal-' + idx).classList.remove('active');
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    setTimeout(() => {
      bar.style.width = bar.style.getPropertyValue('--fill-width');
    }, 350);
  });

  // Section reveal on scroll
  function revealSections() {
    document.querySelectorAll('.reveal').forEach(sec=>{
      let rect = sec.getBoundingClientRect();
      if (rect.top<window.innerHeight*0.93) sec.classList.add('active');
    });
  }
  window.addEventListener('scroll', revealSections); 
  revealSections();

  // Live stats count up
  function countUp(el, to) {
    let n=0, i=setInterval(()=>{ el.textContent = ++n;
      if(n>=to)clearInterval(i);
    },18);
  }
  if (document.getElementById('proj-count') && document.getElementById('lines-count')) {
    countUp(document.getElementById('proj-count'), 7);
    countUp(document.getElementById('lines-count'), 12000);
  }
});

// Flip card for certifications
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function(){ 
    this.querySelector('.flip-inner').style.transform = 'rotateY(180deg)';
  });
  card.addEventListener('blur', function(){ 
    this.querySelector('.flip-inner').style.transform = '';
  });
  card.addEventListener('mouseleave', function(){
    this.querySelector('.flip-inner').style.transform = '';
  });
});

// Timeline expander
function toggleTimeline(el) { el.classList.toggle("expanded"); }

// Project modal
function openModal(idx) {
  document.getElementById('modal-'+idx).style.display = "flex";
  setTimeout(()=>{document.getElementById('modal-'+idx).classList.add('show');}, 10);
}
function closeModal(idx) {
  const modal = document.getElementById('modal-'+idx);
  modal.classList.remove('show');
  setTimeout(()=>{modal.style.display="none";}, 220);
}

// Mode toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("mode-toggle").textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');

function setTheme(dark) {
  if (dark) {
    body.classList.add('dark-mode');
    modeToggle.textContent = "☀️";
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    modeToggle.textContent = "🌙";
    localStorage.setItem('theme', 'light');
  }
}

modeToggle.addEventListener('click', () => {
  setTheme(!body.classList.contains('dark-mode'));
});

if (storedTheme === "dark" || (storedTheme === null && prefersDark)) {
  setTheme(true);
} else {
  setTheme(false);
}


// Copy email
function copyEmail() {
  const email = document.getElementById('email-address').innerText;
  navigator.clipboard.writeText(email).then(() => {
    let toast = document.getElementById("copy-toast");
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 1200);
  });
}
