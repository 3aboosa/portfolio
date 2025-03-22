import { applyCursor } from './cursor.js'

const button = document.createElement("button");
button.id = 'hover-button';
button.innerText = 'Hover over me';
document.querySelector('.img-div').appendChild(button);

  if (navigator.userAgent.includes("Firefox") //fixed spelling
  || navigator.userAgent.includes("Chrome") 
  || navigator.userAgent.includes("Edge"))
  {
    applyCursor("#hover-button", "src/cursors/aero_link.ani");
  }
