import { applyCursor } from './cursor.js'

const button = document.createElement("button");
button.id = 'hover-button';
button.innerText = 'Hover over me';
document.querySelector('.img-div').appendChild(button);

if (navigator.userAgent.includes("Chrome") 
  || navigator.userAgent.includes("Mozilla")
  || navigator.userAgent.includes("Edge"))
  {
    applyCursor("#hover-button", "src/cursors/point_click.ani");
  }
