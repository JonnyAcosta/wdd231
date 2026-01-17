import { getParkData,parkInfoLinks } from "./parkService.mjs";
import {mediaCardTemplate} from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
const parkData = getParkData();




function setParkIntro(data){
  const introEL = document.querySelector(".intro");
  introEL.innerHTML =`<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfo(data){
  const infoEL = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEL.insertAdjacentHTML("afterbegin", html.join(""));
}


setParkIntro(parkData);
setParkInfo(parkInfoLinks); 
setHeaderFooter(parkData); 
