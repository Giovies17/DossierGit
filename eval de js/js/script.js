const Api = "https://randomuser.me/api/";



const burgerMenu = document.querySelector("#icon_burger");
const menuModal = document.querySelector("#menu__content");

burgerMenu.addEventListener("click", () => {
  menuModal.classList.toggle("active");
});
menuModal.addEventListener("click", () => {
  menuModal.classList.toggle("active");
});