//Меню бургер
let iconMenu = document.querySelector(".menu__icon"),
  headermenu = document.querySelector(".header__menu");


if (iconMenu) {
  let hearderMneu = document.querySelector(".menu__list");
  iconMenu.addEventListener("click", function () {
    hearderMneu.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
    headermenu.classList.toggle("_active");
  });
 }