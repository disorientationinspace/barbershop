var modal_map_links = document.querySelectorAll(".button-map");
var modal_map = document.querySelector(".modal-map");
var modal_cover = document.querySelector(".modal-cover");
var modal_login = document.querySelector(".modal-login");
var modal_login_link = document.querySelector(".login-link");
var modal_close_links = document.querySelectorAll(".modal-close");

for (var i = 0; i < modal_map_links.length; i++) {
  modal_map_links[i].addEventListener("click", function(evt) {
      modal_map.classList.toggle("modal-show");
      modal_cover.classList.toggle("modal-show");
  })
}

for (var i = 0; i < modal_close_links.length; i++) {
  modal_close_links[i].addEventListener("click", function(evt){
    var modals = document.querySelectorAll(".modal-show");
    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.toggle("modal-show");
    }
    modal_cover.classList.remove("modal-show");
  })
}

modal_login_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_login.classList.toggle("modal-show");
  modal_cover.classList.toggle("modal-show");
})
