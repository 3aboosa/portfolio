import { applyCursor } from './cursor.js'

  if (navigator.userAgent.includes("Firefox")
  || navigator.userAgent.includes("Chrome") 
  || navigator.userAgent.includes("Edge"))
  {
    applyCursor(".nav-bar-options-projects-link", "src/cursors/aero_link.ani");
    applyCursor(".nav-bar-options-whoami-link", "src/cursors/aero_link.ani");
    applyCursor(".footer-links-img", "src/cursors/aero_link.ani");

    applyCursor(".nav-bar-logo-link", "src/cursors/aero_link.ani")

    applyCursor(".footer-flex-contact-link", "src/cursors/aero_link.ani")
  }
