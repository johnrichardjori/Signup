document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const errorMsg = document.getElementById("error");
    const email = emailInput.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(email)) {
      errorMsg.textContent = "Valid email required.";
      emailInput.style.borderColor = "rgb(255, 99, 71)";
      emailInput.style.color = "rgb(255, 99, 71)";
      emailInput.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
    } else {
      errorMsg.textContent = "";
      localStorage.setItem("userEmail", email);
      window.location.href = "success.html";
    }
  });
