const toggleBtn = document.querySelector("#toggleBtn");
const infoMore = document.querySelector(".info-more");
const navLinks = document.querySelectorAll(".navbar-link");
const hamburgerLinks = document.querySelectorAll(".hamburger-navbar-link");
const articles = document.querySelectorAll("article");
const contactFormBtn = document.querySelector("#contact-form-btn");
const contactBtnText = document.querySelector(".contact-btn-text");
const loader = document.querySelector(".loader");


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

    contactFormBtn.disabled = true;
    loader.classList.add("active");
    contactBtnText.textContent = "Sending...";
    contactFormBtn.style.cursor = "not-allowed";

    emailjs.sendForm(
        "service_okk7zaa",
        "template_hpn1hxv",
        contactForm
    )
    .then(()=>{
        loader.classList.remove("active");
        contactBtnText.textContent = "Send Message";
        contactFormBtn.disabled = false;
        contactFormBtn.style.cursor = "pointer";

        Swal.fire({
            background: "#1e1e1f",
            confirmButtonColor: "#e4c466",
            icon: "success",
            title: "Message sent!",
            text: "Thank you for reaching out. I'll get back to you soon."
        });
        contactForm.reset();
    })
    .catch((error)=>{
        loader.classList.remove("active");
        contactBtnText.textContent = "Send Message";
        contactFormBtn.disabled = false;
        contactFormBtn.style.cursor = "pointer";

        Swal.fire({
            background: "#1e1e1f",
            confirmButtonColor: "#e4c466",
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later."
        });
        console.error(error);
    });

});