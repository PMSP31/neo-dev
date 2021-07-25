// AOS
const productCard = document.querySelectorAll('.pricing .row .col');
const featuresCard = document.querySelectorAll('.features-card');

productCard.forEach((product, i) =>{
  product.dataset.aos = "flip-left";
  product.dataset.aosDelay = i * 200;
})

featuresCard.forEach((fCard , i) =>{
  fCard.dataset.aos = "fade-up";
  fCard.dataset.aosDelay = i * 300;
})
AOS.init({
  once : true,
});


// Google Sheet Forms
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwoOIrylg5r4D3v4G58j0j68E-N9ZfIn5ZSywfoYsxV493sBDslQTpaHGBqA6r7GMxQ4A/exec";
const form = document.forms["website-orders"];
const btnSubmit = document.querySelector('.btn-submit');
const btnLoad = document.querySelector('.button-load');
const modal = document.querySelector('.modal');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // button submit onCLik
  // show btnLoad, remove btnSubmit
  btnLoad.classList.toggle('d-none');
  btnSubmit.classList.toggle('d-none');
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>{ 
      btnLoad.classList.toggle('d-none');
      btnSubmit.classList.toggle('d-none');
      Swal.fire(
        "Success!",
        "We have received the order, wait our reply!",
        'success'
      )
      form.reset();
      console.log("Success!", response);
      $('#orderModal').modal('hide');
    })
    .catch((error) => {
      btnLoad.classList.toggle('d-none');
      btnSubmit.classList.toggle('d-none');
      Swal.fire(
        "Oops!",
        "Something went wrong with your input",
        'error'
      )
      form.reset();
      $('#orderModal').modal('hide');
      console.error("Error!", error.message)
    });
});