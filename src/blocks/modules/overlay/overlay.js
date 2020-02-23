const overlay = document.querySelector(".overlay");
const closeOverlayBtn = document.querySelector(".overlay__form-close");
const showOverlayBtn = document.querySelector(".btn--overlay");

showOverlayBtn.onclick = function() {
	overlay.style.display = "flex";
};

closeOverlayBtn.onclick = function() {
	overlay.style.display = "none";
};