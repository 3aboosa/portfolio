import { applyCursor } from './cursor.js'

  if (navigator.userAgent.includes("Firefox")
  || navigator.userAgent.includes("Chrome") 
  || navigator.userAgent.includes("Edge"))
  {
    applyCursor(".nav-bar-logo-link", "src/cursors/point_house.ani");
    applyCursor(".nav-bar-options-projects-link", "src/cursors/point_click_right.ani");
    applyCursor(".nav-bar-options-whoami-link", "src/cursors/point_click_right.ani");

    applyCursor("#maintenance-img", "src/cursors/grabv2.ani");

    applyCursor(".footer-links-img", "src/cursors/point_click_right.ani");
  }
