const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields.");
    return;
  }
  
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  
  // Form validation successful, proceed with submission
  alert("Form submitted successfully!");
  // Add code to submit the form here
});




