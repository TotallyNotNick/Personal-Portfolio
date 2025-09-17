document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Optionally, validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      alert("Thank you for your message!");
      form.reset();
    });
  });
  