const track = document.getElementById('track');

document.getElementById('toSignup').addEventListener('click', () => {
  track.classList.add('signup-active');
});

document.getElementById('toLogin').addEventListener('click', () => {
  track.classList.remove('signup-active');
});






// let registorForm = document.querySelector("#btnsubmited");

// registorForm.addEventListener("click", () => {
//   let username = document.getElementById("fullname").value;
//   let email = document.getElementById("emailaddress").value;
//   let password = document.getElementById("passwords").value;

//   let newUser = {
//     username: username,
//     email: email,
//     password: password
//   };

//   let users = JSON.parse(localStorage.getItem("users")) || [];
//   users.push(newUser);
//   localStorage.setItem("users", JSON.stringify(users));

//   alert("Registered successfully!");
// });


let registorForm = document.querySelector("#btnsubmited");
registorForm.addEventListener("click", () => {
  let username = document.getElementById("fullname").value.trim();
  let email = document.getElementById("emailaddress").value.trim();
  let password = document.getElementById("passwords").value.trim();

  // validation check
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields!");
    return; // stop here, don't register
  }else if(!/^[a-zA-Z0-9]+$/.test(username)) {
    alert("username must contain only  letters and numbers")
    return;
  }else if (password.length<8){
    alert("password must be eight digits long!")
    return;

  }else if(!email.toLowerCase().endsWith("@gmail.com")){
    alert("email must  conain @gmail.com")
    return;
  }
    
  let newUser = {
    username: username,
    email: email,
    password: password
  };
  


  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully!");

    setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);

});

let loginForm = document.querySelector("#btnsubmit");

loginForm.addEventListener("click", () => {
  let email = document.getElementById("Email").value.trim();
  let password = document.getElementById("Password").value.trim();

  // empty check
  if (email === "" || password === "") {
    alert("Please fill in all fields!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let matchedUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (matchedUser) {
    alert("Logged in successfully!");
    window.location.href = "ecom.html";
  } else {
    alert("Incorrect email or password!");
  }
});


