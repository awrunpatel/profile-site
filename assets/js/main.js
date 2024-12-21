/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
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

    return false; // Prevent default action
  });
});
