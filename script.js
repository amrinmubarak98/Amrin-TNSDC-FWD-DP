// Counter JS

let count = 25000;

function addPhoto() {

  count++;

  document.getElementById("photoCounter").innerText = count;

}

// Contact form

document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  document.getElementById("msg").innerText = "✅ Thank you! Your message has been sent.";

  this.reset();

});