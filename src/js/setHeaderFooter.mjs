import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data){
const disclaimer=document.querySelector(".disclaimer > a");
disclaimer.href=data.url;
disclaimer.innerHTML=data.fullName;
document.querySelector("head > title").textContent = data.name;

document.querySelector(".park-banner_content").innerHTML = parkInfoTemplate(data);
document.querySelector(".park-banner > img").src = data.images[0].url;
}

function setParkFooter(data){
  const footerEL = document.querySelector("#park-footer");
  footerEL.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData){
  setHeaderInfo(parkData);
  setParkFooter(parkData);
}