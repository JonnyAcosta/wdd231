import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer=document.querySelector(".disclaimer > a");
disclaimer.href=parkData.url;
disclaimer.innerHTML=parkData.fullName;

function parkInfoTemplate(info){
    return `<a href="/" class="park-banner_title">${info.name}</a>
    <p class="park-banner_location">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

document.querySelector("head > title").textContent = parkData.name;

document.querySelector(".park-banner_content").innerHTML = parkInfoTemplate(parkData);
document.querySelector(".park-banner > img").src = parkData.images[0].url;