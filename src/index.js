import "./style.css";
import loadHome from "./home.js";
import loadAbout from "./about.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content=document.querySelector("#content");
const homeBtn=document.querySelector("#home");
const aboutBtn=document.querySelector("#about");
const menuBtn=document.querySelector("#menu");
const contactBtn=document.querySelector("#contact");

loadHome();
homeBtn.addEventListener("click",()=>{
    content.innerHTML="";
    loadHome();
})
aboutBtn.addEventListener("click",()=>{
    content.innerHTML="";
    loadAbout();
})
menuBtn.addEventListener("click",()=>{
    content.innerHTML="";
    loadMenu();
})
contactBtn.addEventListener("click",()=>{
    content.innerHTML="";
    loadContact();
})
