let variable = document.querySelectorAll(".arrow").forEach(function (elt) {
  elt.parentNode.addEventListener("click", function toto() {
    let styles = window.getComputedStyle(elt);

    if (styles.display === "none") return;
    if (elt.parentNode.nextElementSibling.style.display == "block") {
      elt.parentNode.nextElementSibling.style.display = "none";
    } else {
      elt.parentNode.nextElementSibling.style.display = "block";
    }
  });
});