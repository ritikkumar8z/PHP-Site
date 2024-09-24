function toggleContent(id) {
  const content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

window.onscroll = function () {
  const button = document.querySelector(".scroll-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}


// Form validation and submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation check
    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        // Show success message
        document.getElementById("formMessage").style.display = "block";
        // Clear form after submission
        document.getElementById("contactForm").reset();
    }
});
