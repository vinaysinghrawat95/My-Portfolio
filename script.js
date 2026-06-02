const toggleBtn = document.querySelector("#toggleBtn");
const infoMore = document.querySelector(".info-more");
const navLinks = document.querySelectorAll(".navbar-link");
const hamburgerLinks = document.querySelectorAll(".hamburger-navbar-link");
const articles = document.querySelectorAll("article");



toggleBtn.addEventListener("click", ()=>{
    infoMore.classList.toggle("visible");
    toggleBtn.textContent = infoMore.classList.contains("visible") ? '▲' : '▼';
});

function switchTabs(targetSection){

    articles.forEach(function(article){
        article.classList.remove("active");
    });

    navLinks.forEach(function(navLink){
        navLink.classList.remove("active");
    });

    hamburgerLinks.forEach(function(hamburgerLink){
        hamburgerLink.classList.remove("active");
    });

    document.querySelector("." + targetSection).classList.add("active");

    document.querySelectorAll("[data-section=" + targetSection + "]").forEach(function(btn){
        btn.classList.add("active");
    });

}

navLinks.forEach((navLink)=>{
    navLink.addEventListener("click", ()=>{
        switchTabs(navLink.dataset.section);
    });
});

hamburgerLinks.forEach((hamburgerLink)=>{
    hamburgerLink.addEventListener("click", ()=>{
        switchTabs(hamburgerLink.dataset.section);
    });
});

switchTabs("about");

emailjs.init("JlspQaF5hx2lEnoDj");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    emailjs.sendForm(
        "service_okk7zaa",
        "template_hpn1hxv",
        contactForm
    )
    .then(()=>{
        alert("message send succesfully");
        contactForm.reset();
    })
    .catch((error)=>{
        console.error(error);
        alert("Failed to send message");
    });

});