/**
 * Created by capaci on 27/12/16.
 */
(function () {
  'use strict';

  var adSidebar = document.getElementsByClassName('ad-sidebar');
  var adSidebarToggleButton = document.getElementsByClassName('ad-toggle-sidebar-button');
  var adSections = document.getElementsByTagName('section');

  var toggleSidebar = function() {
    if (adSidebar[0].classList.contains('ad-sidebar-opened')) {
      adSidebar[0].classList.remove('ad-sidebar-opened');
    } else {
        adSidebar[0].classList.add('ad-sidebar-opened');
    }
  };

  for (var i = 0; i < adSidebarToggleButton.length; i++) {
    adSidebarToggleButton[i].addEventListener('click', toggleSidebar, false);
  }
})();
