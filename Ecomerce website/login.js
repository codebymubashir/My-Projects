const track = document.getElementById('track');

document.getElementById('toSignup').addEventListener('click', () => {
  track.classList.add('signup-active');
});

document.getElementById('toLogin').addEventListener('click', () => {
  track.classList.remove('signup-active');
});






let registorForm = document.querySelector("#btnsubmited");

registorForm.addEventListener("click", (e) => {
   e.preventDefault();
  let username = document.getElementById("fullname").value;
  let email = document.getElementById("emailaddress").value;
  let password = document.getElementById("passwords").value;

  let newUser = {
    username: username,
    email: email,
    password: password
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully!");
});


let loginForm = document.querySelector("#btnsubmit");

loginForm.addEventListener("click", () => {
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;

  let newUser = {
    email: email,
    password: password
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Logined successfully!");
});

