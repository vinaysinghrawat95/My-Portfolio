const toggleBtn = document.querySelector("#toggleBtn");
const infoMore = document.querySelector(".info-more");

toggleBtn.addEventListener("click", ()=>{
    infoMore.classList.toggle("visible");
    toggleBtn.textContent = infoMore.classList.contains("visible") ? '▲' : '▼';
});