import { getParkData,parkInfoLinks,getInfoLinks } from "./parkService.mjs";
import {mediaCardTemplate} from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import "../css/style.css";
import "../css/home.css";




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

// function enableNavigation(){
//   const menuButton = document.querySelector("#global-nav-toggle");
//   const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");
  
//   menuButton.addEventListener("click",(ev)=> {let target=ev.target;
//     document.querySelector(".global-nav").classList.toggle("show");

//     if(target.tagName != "BUTTON"){target = target.closest("button");}

//     if (document.querySelector(".global-nav").classList.contains("show")){
//       target.setAttribute("aria-expanded", "true");
//     } else {target.setAttribute("aria-expanded", "false");
//     }
//     console.log("toggle");
//   });

//   subMenuToggles.forEach((toggle) => {
//     toggle.addEventListener("click", (ev) => {
//       ev.currentTarget
//       .closest("li")
//       .querySelector(".global-nav__sub-menu")
//       .classList.toggle("show");

//       ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
//     });
//   });
// }

async function init(){
const parkData = await getParkData();
const parkInfoLinks = getInfoLinks(parkData.images);

setParkIntro(parkData);
setParkInfo(parkInfoLinks); 
setHeaderFooter(parkData); 
setParkInfo(links);
}
init();
// enableNavigation();