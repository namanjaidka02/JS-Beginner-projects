let lastName = document.getElementById("lastName");
let submitBtn = document.getElementById("submitBtn");
let firstName = document.getElementById("firstName");
function callme() {
  let firstNameVal = firstName.value + "  " + lastName.value;
  localStorage.setItem("userName", firstNameVal);
  console.log(firstNameVal);
}
