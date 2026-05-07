// IMAGE PREVIEW
const photoInput = document.getElementById("photo");
const preview = document.getElementById("preview");
const previewContainer = document.getElementById("preview-container");

photoInput.addEventListener("change", function() {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      preview.src = e.target.result;
      previewContainer.style.display = "block";
    };

    reader.readAsDataURL(file);
  } else {
    previewContainer.style.display = "none";
  }
});


// FORM SUBMIT
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  fetch("https://script.google.com/macros/s/AKfycbwX4jKMBU_P3dPZR9QDyNEDSTBlxkaE68ifmBM7uFjTf9w71jRxdUohUTp07vGqQLc2/exec", {
    method: "POST",
    body: new FormData(this)
  })
  .then(() => alert("✅ Submitted Successfully"))
  .catch(() => alert("❌ Submission Failed"));
});