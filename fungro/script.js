// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// FAQ Accordion
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('active');
  });
});

// Contact Form Validation
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert("Message sent successfully!");
});

// Scroll to Top
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "⬆";
scrollBtn.id = "scrollTop";
document.body.appendChild(scrollBtn);
scrollBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxaTQxPsy4v8PRnUidt_okJkUiPohBB0haGfbK0kChry10GI3UdeYb12fjzVHEwXm8uxA/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.text();

      if (result === "Success") {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Unexpected response: " + result);
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  });
}