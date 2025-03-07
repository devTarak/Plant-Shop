const form = document.getElementById("contactForm");
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('date-time').textContent = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Congratulations! Your message has been sent successfully.");
    form.reset();
});