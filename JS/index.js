// Highlight active page in navbar
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

// Contact form validation
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("input[type='text']").value.trim();
    const email = contactForm.querySelector("input[type='email']").value.trim();
    const message = contactForm.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before sending your message.");
      return;
    }

    if (!validateEmail(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Thank you for contacting us, " + name + "! We will reply soon.");
    contactForm.reset();
  });
}

// Email validation helper
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

