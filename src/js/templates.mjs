import spirtePath from "../images/sprite.symbol.svg";

export function mediaCardTemplate(info){
  return `
  <div class="media-card">
  <a href="${info.link}">
  <img src="${info.image}" alt="${info.name}" class="media-card_img">
  <h3 class="media-card_title">${info.name}</h3>
  </a>
    <p>${info.description}</p>
  </div>
  `;
}

export function parkInfoTemplate(info){
    return `<a href="/" class="park-banner_title">${info.name}</a>
    <p class="park-banner_location">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}


function getMailingAddress(addresses){
  const mailing = addresses.find(address => address.type === "Mailing");
  return mailing;
}

function getVoicePhone(numbers){
  const voicePhone = numbers.find(number => number.type === "Voice");
  return voicePhone.phoneNumber;
}

export function footerTemplate(info){
  const mailing = getMailingAddress(info.addresses);
  const voicePhone = getVoicePhone(info.contacts.phoneNumbers);
  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailing.line1}</p>
  <p>${mailing.city},${mailing.stateCode} ${mailing.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voicePhone}</p>
  </section>`;
}

export function alertTemplate(alert){
  let alertType = "";
  switch (alert.category){
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return`<li class="alert">
  <svg class="icon" role="presentation" focusable="false" aria-hidden="true">
    <use xlink:href="${spirtePath}#alert-${alertType}"></use>
    </svg>
    <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
    </div>
  </li>`;
}

export function visitorCenterTemplate(center){
  return `<li class="visitor-center">
  <h4>${center.name}</h4>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p>
  </li>`;
}

export function activityListTemplate(activities){
  return activities.map(activity => `<li>${activity.name}</li>`).join("");
}