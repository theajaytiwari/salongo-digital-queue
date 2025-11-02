// ===== Smooth Scrolling (handled mostly by CSS) =====
// Just in case you want programmatic control later
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== Highlight Active Section on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== Booking Page Logic (booking.html) =====
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const service = document.getElementById("service").value;

    if (!name || !date || !time || !service) {
      alert("Please fill all fields before booking!");
      return;
    }

    // Simulate confirmation
    alert(`Thanks ${name}! Your ${service} appointment is booked on ${date} at ${time}.`);
    bookingForm.reset();
  });
}

// ===== Optional: Mobile Navigation Toggle =====
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav ul");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

function updateQueue() {
  const queueCount = Math.floor(Math.random() * 8) + 1; 
  const waitTime = queueCount * 10;

  document.getElementById("queueCount").textContent = queueCount;
  document.getElementById("waitTime").textContent = waitTime + " min";

  const badge = document.getElementById("availability");

  if (queueCount <= 2) {
    badge.textContent = "High";
    badge.className = "badge high";
  } else if (queueCount <= 5) {
    badge.textContent = "Medium";
    badge.className = "badge medium";
  } else {
    badge.textContent = "Low";
    badge.className = "badge low";
  }
}

setInterval(updateQueue, 5000);
updateQueue();
