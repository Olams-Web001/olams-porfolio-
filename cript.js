event.preventDefault(); 
fetch(this.action, {
    method: this.method,
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
})
.then(response => {
    if (response.ok) {
        document.getElementById("success-message").style.display = "block"; // Show success message
        this.reset();
    } else {
        alert("Oops! There was a problem submitting your form.");
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    console.log(menuIcon); 
    console.log(navLinks);
    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    } else {
        console.error("menuIcon or navLinks not found in the DOM.");
    }
});


