$(document).ready(function () {
    // Validate Username
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
      validateUsername();
    });
   
    function validateUsername() {
      let usernameValue = $("#usernames").val();
      if (usernameValue.length == "") {
        $("#usercheck").show();
        usernameError = false;
        return false;
      } else if (usernameValue.length < 4 || usernameValue.length > 10) {
        $("#usercheck").show();
        $("#usercheck").html("length of username must be between 4 and 10");
        usernameError = false;
        return false;
      } else {
        $("#usercheck").hide();
      }
    }
   
    // Validate Email
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
      let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
      let s = email.value;
      if (regex.test(s)) {
        email.classList.remove("is-invalid");
        emailError = true;
      } else {
        email.classList.add("is-invalid");
        emailError = false;
      }
    });
   
   
    // Submit button
    $("#submitbtn").click(function () {
      validateUsername();
      validateEmail();
      if (
        usernameError == true &&
        emailError == true
      ) {
        return true;
      } else {
        return false;
      }
    });

    Email.send();

  });

let token ="20b444a2-b3af-4eb8-bae7-911f6097521c"
  let mailValue = $("#email").val();
  let subValue = $("#subject").val();
  let descValue = $("#address").val();

  function sendMail(e) {
    console.log(mailValue);
    e.preventdefault();
    Email.send({
      secureToken: token,
      Host : "smtp.gmail.com",
      Username : "usernameValue",
      Password : "password",
      To : 'shivatiwari1648@gmail.com',
      From : "mailValue",
      Subject : "subValue",
      Body : "descValue"
  }).then(
    message => alert(message)
  );
  }
  