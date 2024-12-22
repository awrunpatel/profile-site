$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");

  // Set default filter to show ".web" category
  t.isotope({
    filter: ".web", // Change this to the class of the category you want to show by default
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: false
    }
  });

  // Handle filter button clicks
  $(".filters a").click(function () {
    // Remove 'active' class from all buttons
    $(".filters .active").removeClass("active");

    // Add 'active' class to clicked button
    $(this).addClass("active");

    // Get the filter to apply based on the clicked button's data-filter attribute
    var filterValue = $(this).attr("data-filter");

    // Apply the filter using Isotope
    t.isotope({
      filter: filterValue,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false
      }
    });

    return false;
  });
  const roles = ["Designer", "Developer", "Django Developer", "Backend Engineer"];
  const $headerMono = $(".header-mono");
  let index = 0;

  function updateRole() {
    $headerMono.text(roles[index]);
    index = (index + 1) % roles.length;
  }

  setInterval(updateRole, 3000);

  updateRole();
});
