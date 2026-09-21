function aboutUs(){
    const content=document.querySelector("#content");
    const mainHeading=document.createElement("h1");
    mainHeading.textContent="About our Restaurant!!";
    const heading1=document.createElement("h3");
    heading1.textContent="Our Story";
    const heading2=document.createElement("h3");
    heading2.textContent="Our Philosophy";
    const heading3=document.createElement("h3");
    heading3.textContent="Fresh Ingredients";
    const paragraph1=document.createElement("p");
    paragraph1.textContent="Founded with a passion for great food and good company, Bella Cucina brings together fresh ingredients, comforting flavors, and a welcoming atmosphere"
    const paragraph2=document.createElement("p");
    const paragraph3=document.createElement("p");
    paragraph2.textContent="We believe great food doesn't need to be complicated. We focus on quality ingredients, carefully prepared dishes, and flavors that keep you coming back."
    paragraph3.textContent="From locally sourced produce to carefully selected ingredients, we put quality first in everything we serve.";
    content.append(mainHeading,heading1,paragraph1,heading2,paragraph2,heading3,paragraph3);
} 
export default aboutUs;