
document.addEventListener("DOMContentLoaded", () => {

  window.addEventListener("scroll", () => {
    let ulist = document.querySelector("[data-navbar-ul]");
    if (window.pageYOffset > 30) {
      ulist.classList.remove("navbarNormal")
      ulist.classList.add("navbarAnimated");
    } else {
      ulist.classList.remove("navbarAnimated");
      ulist.classList.add("navbarNormal");
    }
  });

  let ulLi = document.querySelector("[data-navbar-ul]");
  let li = ulLi.querySelectorAll("li");
  let previo = null;

  li[0].addEventListener('click', () => {
    li[0].querySelector("a").classList.add("clickedLink");
    li[1].querySelector("a").classList.remove("clickedLink");
    li[2].querySelector("a").classList.remove("clickedLink");
  });
  li[1].addEventListener('click', () => {
    li[0].querySelector("a").classList.remove("clickedLink");
    li[1].querySelector("a").classList.add("clickedLink");
    li[2].querySelector("a").classList.remove("clickedLink");
  });
  li[2].addEventListener('click', () => {
    li[0].querySelector("a").classList.remove("clickedLink");
    li[1].querySelector("a").classList.remove("clickedLink");
    li[2].querySelector("a").classList.add("clickedLink");
  });


  // li.forEach(item => {
  //   item.addEventListener('click', () => {
  //     console.log(item.classList);
  //     if (item.classList.length == 0) {
  //       item.classList.add("clickedLink");
  //     } else {
  //       item.classList.remove("clickedLink");
  //     }
  //   });
  // });








});
