import "../css/visitor-center.css";
import "../css/style.css";
import setHeaderFooter from "./setHeaderFooter.mjs";
import {getParkData, getParkVisitorCenterDetails, getParkVisitorCenters} from "./parkService.mjs";
import {
    vcInfoTemplate,
    vcTitleTemplate,
    vcAddressesListTemplate,
    vcAmenityTemplate,
    vcDirectionsTemplate,
    vcContactsTemplate,
    vcImageTemplate,
    vcDetailsTemplate,
    listTemplate

} from "./templates.mjs";


function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

async function init(){
    try {
      const parkData = await getParkData();
      const id = getParam("id");
      let centerDetails = null;
      if (id) {
        centerDetails = await getParkVisitorCenterDetails(id);
      } else {
        centerDetails = await getParkVisitorCenters();
      }
      setHeaderFooter(parkData);
      if (centerDetails){
        buildPage(centerDetails);
      } else {
        document.querySelector(".vc-info").textContent = "No visitor center data available.";
      }
    } catch (error) {
      console.error("Failed to initialize visitor center page", error);
      document.querySelector(".vc-info").textContent = "Unable to load visitor center details. Please check API key and network.";
    }
}

function buildPage(data) {

  document.querySelector(".vc-title").innerHTML = vcTitleTemplate(data.name);
  document.querySelector(".vc-info").innerHTML = vcInfoTemplate(data);
  const detailsEl = document.querySelector(".vc-details-list");
  detailsEl.innerHTML = "";

  const addressHTML = vcAddressesListTemplate(data.addresses);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcAddresses",
      "Addresses",
      "heading-icon_map-pin",
      addressHTML
    )
  );

  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcDirections",
      "Directions",
      "directions",
      vcDirectionsTemplate(data.directionsInfo)
    )
  );
 
  const amenitiesHTML = listTemplate(data.amenities, vcAmenityTemplate);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate(
      "vcAmenities",
      "Amenities",
      "heading-icon_info",
      amenitiesHTML
    )
  );

  const contactHTML = vcContactsTemplate(data.contacts);
  detailsEl.insertAdjacentHTML(
    "beforeend",
    vcDetailsTemplate("vcContacts", "Contacts", "phone", contactHTML)
  );
  
  const galleryHTML = listTemplate(data.images, vcImageTemplate);
  document
    .querySelector(".vc-gallery")
    .insertAdjacentHTML("beforeend", galleryHTML);
}

init();