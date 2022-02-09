//  Alert Example

const closingAlertBox = document.querySelector("#alert-close");
closeAlert = () => {
  closingAlertBox.style.display = "none";
};

// Toast Example

const toastExample = document.querySelector("#toast-example");
const toastExampleButton = document.querySelector("#toast-example-btn");
const btnToCloseToast = document.querySelector("#close-example-toast");
let timeIdForToast;

toastExampleButton.addEventListener("click", () => {
  toastExample.style.visibility = "visible";

  timeIdForToast = setTimeout(() => {
    toastExample.style.visibility = "hidden";
  }, 3000);
});

btnToCloseToast.addEventListener("click", () => {
  clearTimeout(timeIdForToast);
  toastExample.style.visibility = "hidden";
});

//Input (Form) Validation

const exampleForm = document.querySelectorAll(".submit-form-example");

exampleForm.forEach((form) => {
  form.addEventListener(
    "submit",
    (e) => {
      console.log("hello");
      if (!form.checkValidity()) {
        e.preventDefault();
      }
      e.preventDefault();
      form.classList.add("form-validated");
    },
    false
  );
});

//Rating component

const ratingStars = document.querySelectorAll(
  ".example-rating-form .rating-star-input"
);
const ratingStarsForm = document.querySelector(".example-rating-form");
const ratingExampleShowRating = document.querySelector(
  ".rating-example-number-show"
);

ratingStars.forEach((star, id) => {
  star.addEventListener("change", () => checkAllTheBelowStars(id));
});

function checkAllTheBelowStars(idx) {
  if (ratingStars[idx].checked) {
    for (let j = idx - 1; j >= 0; j--) {
      ratingStars[j].checked = true;
    }
  } else {
    for (let j = idx + 1; j < ratingStars.length; j++) {
      ratingStars[j].checked = false;
    }
  }
}

ratingStarsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let sum = 0;
  ratingStars.forEach((star) => {
    if (star.checked) sum += 1;
  });
  ratingExampleShowRating.innerText = `You have submitted ${sum} rating`;
});

//Image Slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Modals

var modal = document.querySelector(".modal");
var span = document.querySelector(".modal-close");

span.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

var openModalBtn = document.querySelector("#modal-open-btn");
openModalBtn.onclick = () => {
  modal.style.display = "block";
};
