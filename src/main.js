import { applyCursor } from './scripts/cursor.js'

  if (navigator.userAgent.includes("Firefox")
  || navigator.userAgent.includes("Chrome") 
  || navigator.userAgent.includes("Edge"))
  {
    applyCursor(".nav-bar-logo-link", "src/cursors/point_house.ani");
    applyCursor(".nav-bar-options-link", "src/cursors/point_click_right.ani");

    applyCursor("#maintenance-img", "src/cursors/grab.ani");

    applyCursor(".footer-links-img", "src/cursors/point_click_right.ani");
    applyCursor(".footer-links-email-canvas", "src/cursors/point_click_right.ani");
  }
