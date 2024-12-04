function displyMobileMenu() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("humburger-nav");
  mobileMenu.style.display = "block";
  burger.style.display = "none";
}

function menuBack() {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("humburger-nav");
  mobileMenu.style.display = "none";
  burger.style.display = "block";
}

function more() {
  const showLess = document.querySelector(".show-more");
  showLess.style.display = "none";

  let mores = [".more-1", ".more-2", ".more-3", ".more-4"];

  for (let i = 0; i < mores.length; i++) {
    let showMore = document.querySelector(mores[i]);
    showMore.style.display = "block";
  }
}
