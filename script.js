const scriptURL =
  "https://script.google.com/macros/s/AKfycbwoOIrylg5r4D3v4G58j0j68E-N9ZfIn5ZSywfoYsxV493sBDslQTpaHGBqA6r7GMxQ4A/exec";
const form = document.forms["website-orders"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
