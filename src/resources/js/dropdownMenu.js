/**
 * Created by capaci on 27/12/16.
 */
(function () {
  'use strict';

  var adDropdownMenu = document.getElementsByClassName("ad-dropdown-menu");

  var toggleDropdownMenu = function() {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      for (var i = 0; i < adDropdownMenu.length; i++) {
        adDropdownMenu[i].classList.remove('active');
      }
      this.classList.add('active');
    }
  };

  for (var i = 0; i < adDropdownMenu.length; i++) {
    adDropdownMenu[i].addEventListener('click', toggleDropdownMenu, false);
  }
})();
