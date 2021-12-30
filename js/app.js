let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".navigation");
let header = document.querySelector("#header");
let navigationLinks = navigation.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-isActive");
  navigation.classList.toggle("navigation-isActive");
  header.classList.toggle("backdrop");
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("navigation-isActive");
    hamburger.classList.remove("hamburger-isActive");
    if (header.classList.contains("backdrop")) {
      header.classList.remove("backdrop");
    }
  });
});
