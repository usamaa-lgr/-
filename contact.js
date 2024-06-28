document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.elements["name"].value;
    const email = contactForm.elements["email"].value;
    const message = contactForm.elements["message"].value;

    // Replace with your own email address
    const toEmail = "oulagssama@gmail.com";

    const subject = `Message from ${name} (${email})`;
    const body = `${message}`;

    // Send email (in a real application, you would use a server-side script or service)
    window.open(
      `mailto:${toEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );

    // Optionally, clear the form after sending
    contactForm.reset();
  });
});
