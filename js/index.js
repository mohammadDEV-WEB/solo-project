function color() {
  const scroll = window.scrollY;
  const width = window.innerWidth;
  if (width > 752 && scroll >= 75) {
    $(".nav-link").css("color", "#666");
    $(".nav-link.hover").css("color", "#f4c616");
    $(".nav-link.active").css("color", "#f4c616");
  } else {
    $(".nav-link").css("color", "white");
    $(".nav-link.hover").css("color", "#f4c616");
    $(".nav-link.active").css("color", "#f4c616");
  }
}
window.addEventListener("load", color);
window.addEventListener("scroll", color);
