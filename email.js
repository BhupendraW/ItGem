function sendEmail(event) {
    event.preventDefault(); // Prevents page reload

    let params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    emailjs.send("service_g9j2lfq", "template_fbd4tlm", params)
        .then(response => {
            Swal.fire({
                title: "Success!",
                text: "Your message has been sent successfully.",
                icon: "success",
                confirmButtonText: "OK",
                allowOutsideClick: true,  // Close on clicking outside
                allowEscapeKey: true,    // Close on pressing Escape
                timer: 3000, // Auto close after 3 seconds
                willClose: () => {
                    document.getElementById("contactForm").reset(); // Clear form
                }
            });
            document.getElementById("contactForm").reset(); // Clear form after sending
        })
        .catch(error => {
            console.error("Error sending email:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to submit. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
                allowOutsideClick: true,
                allowEscapeKey: true
            });
        });
}
