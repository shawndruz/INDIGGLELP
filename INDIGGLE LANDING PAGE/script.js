const scriptURL = "https://script.google.com/macros/s/AKfycbwLJlcBiXnF0G5IPwcbxMmZN5GBnHCEAtqf1oLIuL35Y2J4SE9cwcslhTvPlydpGZkF/exec"; 
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  const formData = {
    firstname: form.firstname.value,
    lastname: form.lastname.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      successMessage.textContent = "Thanks! We'll be in touch soon.";
      form.reset();
    } else {
      successMessage.textContent = "Something went wrong. Try again!";
    }
  })
  .catch(error => {
    successMessage.textContent = "Error sending message.";
    console.error('Error!', error.message);
  });
});
