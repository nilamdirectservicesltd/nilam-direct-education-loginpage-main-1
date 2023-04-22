const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Get form input values
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Do form validation here if needed

  // Redirect to NDS if login button clicked
  const loginButton = document.querySelector('input[type="submit"]');
  loginButton.addEventListener('click', () => {
    window.location.href = "https://nilamdirectservicesltd.github.io/nilam-direct-education-main-2/";
  });
});
