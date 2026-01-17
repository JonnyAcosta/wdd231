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