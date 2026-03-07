function mainMenuHandler(ev){
    let target=ev.target;
    document.querySelector(".global-nav").classList.toggle("show");

    if(target.tagName != "BUTTON"){target = target.closest("button");}

    if (document.querySelector(".global-nav").classList.contains("show")){
      target.setAttribute("aria-expanded", "true");
    } else {target.setAttribute("aria-expanded", "false");
    }
    console.log("toggle");
}

function subMenuHandler(ev){
  const toggle = ev.currentTarget;
  const submenu = toggle.closest("li")?.querySelector(".global-nav__submenu");

  if (!submenu) {
    console.warn("Submenu toggle clicked but no submenu found", toggle);
    return;
  }

  submenu.classList.toggle("show");

  const icon = toggle.querySelector(".icon");
  if (icon) {
    icon.classList.toggle("rotate");
  }
}




export default function enableNavigation(){
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");
  
  menuButton.addEventListener("click",mainMenuHandler);

  subMenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", subMenuHandler);
  });
}