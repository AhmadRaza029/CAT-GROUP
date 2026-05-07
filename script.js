const form = document.getElementById("form");
const photoInput = document.getElementById("photo");
const previewContainer = document.getElementById("preview-container");


// ==========================
// 📸 MULTIPLE IMAGE PREVIEW
// ==========================
photoInput.addEventListener("change", function () {
  previewContainer.innerHTML = "";

  const files = Array.from(this.files);

  files.forEach(file => {

    // ✅ Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Only images are allowed!");
      return;
    }

    // ✅ Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      previewContainer.appendChild(img);
    };

    reader.readAsDataURL(file);
  });
});


// ==========================
// 💾 AUTO SAVE FORM DATA
// ==========================
form.addEventListener("input", () => {
  const data = {};

  new FormData(form).forEach((value, key) => {
    if (key !== "photo") { // ❗ skip file input
      data[key] = value;
    }
  });

  localStorage.setItem("formData", JSON.stringify(data));
});


// ==========================
// 🔄 LOAD SAVED DATA
// ==========================
window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("formData"));

  if (saved) {
    Object.keys(saved).forEach(key => {
      if (form.elements[key]) {
        form.elements[key].value = saved[key];
      }
    });
  }
});


// ==========================
// 🚀 FORM SUBMIT
// ==========================
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // 🔄 Loading feedback
  const button = form.querySelector("button");
  button.disabled = true;
  button.innerText = "Submitting...";

  fetch("https://script.google.com/macros/s/AKfycbz5h5mnddWs7o5ohQniJRFG6jbq5ab_axgudj0Z9GawxVH3sSoAzz0dQmq_AtBQILQW/exec", {
    method: "POST",
    body: formData
  })
    .then(() => {
      alert("✅ Submitted Successfully");

      form.reset();
      previewContainer.innerHTML = "";
      localStorage.removeItem("formData");
    })
    .catch(() => {
      alert("❌ Submission Failed");
    })
    .finally(() => {
      button.disabled = false;
      button.innerText = "Submit Report";
    });
});