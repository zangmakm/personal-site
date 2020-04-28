function navOperator() {
  var previousPage = "Home";
  var currentPage = "";

  var menus = document.querySelectorAll(".menu_link");

  menus.forEach((menu) => {
    menu.addEventListener("click", (event) => {
      currentPage = event.target.text;
      var previous = document.getElementById(previousPage);
      var current = document.getElementById(currentPage);
      //console.log("p:" + previous);
      //console.log("c:" + current);
      //debugger;
      changePage(previous, current);
      //changeMenu();
      previousPage = currentPage;
    });
  });
}

function changePage(previous, current) {
  previous.classList.remove("sub-page--active", "animated", "fadeInRightBig");
  previous.classList.add("animated", "fadeOutLeftBig");
  current.classList.remove("animated", "fadeOutLeftBig");
  current.classList.add("sub-page--active", "animated", "fadeInRightBig");
  //console.log("pL:" + previous.classList);
  //console.log("cL:" + current.classList);
}

function main() {
  navOperator();
}

main();
