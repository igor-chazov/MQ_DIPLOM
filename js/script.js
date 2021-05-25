$(".js-menu__button").click(function () {
  $(this).toggleClass("active");
  $("#menu-btn").toggleClass("open");
  $(".banner__img").toggleClass("blur");
  $(".header__logo").toggleClass("blur");
  $(".header__title").toggleClass("blur");
});
