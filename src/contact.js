function contact(){
    const content=document.querySelector("#content");
    const mainHeading=document.createElement("h1");
    mainHeading.textContent="Contact Us";
    const heading1=document.createElement("h3");
    heading1.textContent="Get in Touch";

    const paragraph1=document.createElement("p");
    paragraph1.textContent="Have a question, want to make a reservation, or just want to say hello? We'd love to hear from you."
    content.append(mainHeading,heading1,paragraph1);

    const heading2=document.createElement("h3");
    heading2.textContent="Address";
    const address=document.createElement("p");
    address.textContent="123 Main Street, Bengaluru, Karnataka";
    content.append(heading2,address);

    const heading3=document.createElement("h3");
    heading3.textContent="Phone No";
    const phoneNo=document.createElement("p");
    phoneNo.textContent="+91 98765 43210";
    content.append(heading3,phoneNo);

    const heading4=document.createElement("h3");
    heading4.textContent="Email";
    const email=document.createElement("p");
    email.textContent="hello@bellacucina.com";
    content.append(heading4,email);

    const heading5=document.createElement("h3");
    heading5.textContent="Working Hours";
    const workingHours=document.createElement("p")
    workingHours.textContent="Monday – Friday: 11:00 AM – 10:00 PM\nSaturday – Sunday: 10:00 AM – 11:00 PM"
    content.append(heading5,workingHours);

    const visitAgain=document.createElement("h2");
    visitAgain.textContent="Come visit us and enjoy a great meal!";
    content.append(visitAgain);
}

export default contact;