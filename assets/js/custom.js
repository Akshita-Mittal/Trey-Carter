function toggleMenu() {
    // toggle menu-js
    var mobileMenu = document.getElementById("siteMenu");
    mobileMenu.classList.toggle("OpenNav");
    // toggle overflow js
    var body = document.body;
    body.classList.toggle("overflow_hidden");
    // toggle button animate js
    var togglemenuIcon = document.getElementById("menuIcon");
    togglemenuIcon.classList.toggle("active");
}

$(document).ready(function() {
    $('.common-modal').on('hidden.bs.modal', function() {
      var $this = $(this).find('iframe'),
        tempSrc = $this.attr('src');
      $this.attr('src', "");
      $this.attr('src', tempSrc);
    });
});