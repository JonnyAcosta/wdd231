import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate,visitorCenterTemplate, activityListTemplate } from "./templates.mjs";
import { getParkData,getParkAlerts,getParkVisitorCenter } from "./parkService.mjs";
import "../css/conditions.css";
import "../css/style.css";

async function init(){
    try {
        const parkData = await getParkData();
        console.log("Park Data:", parkData);
        setHeaderFooter(parkData);
        const alerts = await getParkAlerts(parkData.parkCode);
        console.log("Alerts:", alerts);
        setAlerts(alerts);
        const visitorCenters = await getParkVisitorCenter(parkData.parkCode);
        console.log("Visitor Centers:", visitorCenters);
        setVisitorCenters(visitorCenters);
        console.log("Activities:", parkData.activities);
        setActivities(parkData.activities);
    } catch (error) {
        console.error("Error in init:", error);
    }
}

function setAlerts(alerts){
    const alertsContainer = document.querySelector(".alerts > ul");
    if (!alertsContainer) {
        console.error("Alerts container not found");
        return;
    }
    alertsContainer.innerHTML = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setVisitorCenters(centers){
    const centerContainer= document.querySelector(".visitor ul");
    if (!centerContainer) {
        console.error("Visitor centers container not found");
        return;
    }
    const html = centers.map(visitorCenterTemplate);
    centerContainer.insertAdjacentHTML("afterbegin", html.join(""));
}

function setActivities(activities){
    const activitiesContainer = document.querySelector(".activities ul");
    if (!activitiesContainer) {
        console.error("Activities container not found");
        return;
    }
    const html = activityListTemplate(activities);
    activitiesContainer.insertAdjacentHTML("afterbegin", html);
}

init();