// User Interface

function openNav() {
  document.getElementById('myNav').style.width = "100%";
}
function closeNav() {
  document.getElementById('myNav').style.width = "0%";
}
function ClearField() {
  document.getElementById("emailBox").value = "";
}
$(document).ready(function() {
  $('#subscribe').click(function() {
    alert('Thank You For Subscribing!');

    ClearField();
  });
});
