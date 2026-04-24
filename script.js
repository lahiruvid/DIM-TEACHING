const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const form = document.querySelector(".enroll-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name")?.value.trim() || "Student";
    const grade = document.getElementById("grade")?.value.trim() || "Not specified";
    const mode = document.getElementById("mode")?.value.trim() || "Not specified";
    const message = document.getElementById("message")?.value.trim() || "No extra message";

    const text = `Hello Teacher Dimalsha, I need enrollment details.
Name: ${name}
Grade/Target: ${grade}
Preferred mode: ${mode}
Message: ${message}`;
    const whatsappUrl = `https://wa.me/94760536152?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");

    alert("Great! We opened WhatsApp to send your inquiry.");
    form.reset();
  });
}
