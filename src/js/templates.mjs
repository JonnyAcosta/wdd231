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
  <h4><a href="visitor-center.html?id=${center.id}">${center.name}</a></h4>
  <p>${center.description}</p>
  <p>${center.directionsInfo}</p>
  </li>`;
}

export function activityListTemplate(activities){
  return activities.map(activity => `<li>${activity.name}</li>`).join("");
}

export function vcInfoTemplate(data){
  const image = Array.isArray(data.images) && data.images.length ? data.images[0] : null;
  const imageHtml = image ? `<figure>
    <img src="${image.url}" alt="${image.alt}" />
    <figcaption>${image.caption}<span>${image.credit}</span></figcaption>
  </figure>` : "";
  return `${imageHtml}
  <p>${data.description || "No description available."}</p>`;
}

export function vcTitleTemplate(text){
  return `<svg class="icon" role="presentation" focusable="false">
      <use xlink:href="${spirtePath}#ranger-station"></use>
    </svg>
    ${text}`;
}

export function listTemplate(items, itemTemplate){
  if (!Array.isArray(items) || items.length === 0) {
    return `<p>No items available.</p>`;
  }
  return `<ul>${items.map(itemTemplate).join("")}</ul>`;
}

function vcAddressTemplate(address){
  if (!address) return "";
  return `<section>
    <h3>${address.type} Address</h3>
    <address>
      ${address.line1}<br />
      ${address.city}, ${address.stateCode} ${address.postalCode}
    </address>
  </section>`;
}

export function vcAddressesListTemplate(data){
  const physical = data.find(address => address.type === "Physical");
  const mailing = data.find(address => address.type === "Mailing");
  let html = vcAddressTemplate(physical);
  if (mailing){
    html += vcAddressTemplate(mailing);
  }
  return html;
}

export function vcDetailsTemplate(id, label, icon, content) {
  return `<details id="${id}" class="vc-details-item">
    <summary>
      <svg class="icon" role="presentation" focusable="false">
        <use xlink:href="${spirtePath}#${icon}"></use>
      </svg>
      ${label}
    </summary>
    <div class="vc-details-content">${content}</div>
  </details>`;
}

export function vcDirectionsTemplate(data){
  return `<p>${data}</p>`;
}

export function vcAmenityTemplate(data){
  return `<li>${data}</li>`;
}

export function vcDirectionTemplate(data){
  return `<p>${data}</p>`;
}

export function vcContactsTemplate(data){
  const email = data.emailAddresses?.[0]?.emailAddress || "not available";
  const phone = data.phoneNumbers?.[0]?.phoneNumber || "not available";
  return `<section class="vc-contacts__email">
  <h3>Email Address</h3>
  <a href="mailto:${email}">${email}</a>
  </section>
  <section class="vc-contacts__phone">
  <h3>Phone Number</h3>
  <a href="tel:+1:${phone}">${phone}</a>
  </section>`;

}

export function vcImageTemplate(data){
  const alt = data.altText || data.alt || "Visitor center photo";
  return `<li><img src="${data.url}" alt="${alt}"></li>`;
}

export function vcPageTitleTemplate(name){
  return `
  <h1 class="vc-title">
    <svg class="icon" role="presentation" focusable="false">
      <use xlink:href="${spirtePath}#ranger-station"></use>
    </svg>
    ${name}
  </h1>`;
}

export function vcGeneralInfoTemplate(data){
  const image = Array.isArray(data.images) && data.images.length ? data.images[0] : null;
  const imageHtml = image
    ? `<figure>
        <img src="${image.url}" alt="${image.altText || image.alt || "visitor center"}" />
        <figcaption>${image.caption}<span>${image.credit}</span></figcaption>
      </figure>`
    : "";

  return `${imageHtml}
  <p>${data.description || "No description available."}</p>`;
}

export function vcDetailsBoxTemplate(id, label, icon, content){
  return `<details id="${id}" class="vc-details-item">
    <summary>
      <svg class="icon" role="presentation" focusable="false">
        <use xlink:href="${spirtePath}#${icon}"></use>
      </svg>
      ${label}
    </summary>
    ${content}
  </details>`;
}
