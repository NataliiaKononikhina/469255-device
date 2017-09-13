var mapLink = document.querySelector(".map-link");
var mapPopup = document.querySelector(".map");
var closeMap = document.querySelector(".map .modal-close");
var contactsLink = document.querySelector(".button-contacts");
var feedBackPopup = document.querySelector(".write-to-us");
var closeFeedBac = document.querySelector(".write-to-us .modal-close");
var form = feedBackPopup.querySelector("form");
var yourName = feedBackPopup.querySelector(".your-name");
var yourMail = feedBackPopup.querySelector(".your-mail");
var yourLeter = feedBackPopup.querySelector(".your-leter");
var nameInStorage = localStorage.getItem("name");
var emailInStorage = localStorage.getItem("email");


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("show-map");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("show-map");
});

contactsLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedBackPopup.classList.add("show-feed-back");
    yourName.focus();

    if (nameInStorage) {
       yourName.value = nameInStorage;
       yourMail.focus(); 
    }

    if (emailInStorage) {
        yourMail.value = emailInStorage;
        yourLeter.focus();
    }
});

closeFeedBac.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedBackPopup.classList.remove("show-feed-back");
    feedBackPopup.classList.remove("error-feed-back");
});

form.addEventListener("submit", function (evt) {
    if (!yourName.value || !yourMail.value || !yourLeter.value) {
        evt.preventDefault();
        feedBackPopup.classList.add("error-feed-back");
    } else {
        localStorage.setItem("name", yourName.value);
        localStorage.setItem("email", yourMail.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("show-map")) {
            mapPopup.classList.remove("show-map");
        }
        if (feedBackPopup.classList.contains("show-feed-back")) {
            feedBackPopup.classList.remove("show-feed-back");
            feedBackPopup.classList.remove("error-feed-back");
        }
    }
});