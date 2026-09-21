import menu from "./images/MW17-Flat-Menu-BullFish-1.jpg";

export default function loadMenu(){
    const content=document.querySelector("#content");
const menuCard=document.createElement("img");
menuCard.src=menu;
menuCard.alt="Menu Card";
content.append(menuCard);
}