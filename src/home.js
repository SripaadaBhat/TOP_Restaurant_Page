


function loadHome(){

    const content=document.querySelector("#content");
    const heading=document.createElement("h1");
        
    heading.textContent="Welcome to My Restaurant!!";
    const paragraph=document.createElement("p");
    paragraph.textContent="Experience delicious, freshly prepared dishes made with quality ingredients and served with warmth. Whether you're here for a quick meal or a special evening, we’re here to make every visit memorable.";
    content.append(heading,paragraph);
}
export default loadHome;