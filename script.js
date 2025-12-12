function checkEmail() {
  const email = document.getElementById("emailInput").value;
  const isValid = email.includes("@");
  document.getElementById("result").textContent = isValid ? "Valid" : "Invalid";
}
