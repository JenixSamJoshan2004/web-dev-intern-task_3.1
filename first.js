window.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const bigImg = document.querySelector(".lightbox-img");
    const lightbox = document.querySelector(".lightbox");
  
    thumbnails.forEach(thumb => {
      thumb.addEventListener("click", () => {
        const fullImg = thumb.getAttribute("data-full");
        bigImg.src = fullImg;
        lightbox.style.display = "flex";
      });
    });
  
    lightbox.addEventListener('click',()=>{
        lightbox.style.display="none";
    })
  });
  