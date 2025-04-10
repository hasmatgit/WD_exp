const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let scale = 1;
document.querySelectorAll(".gallery-item").forEach(item => {
    34
    35
    item.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = item.src;
        scale = 1;
        lightboxImg.style.transform = `scale(${scale})`;
    });
});
function closeLightbox() {
    lightbox.style.display = "none";
}
function zoomIn() {
    scale += 0.2;
    lightboxImg.style.transform = `scale(${scale})`;
}
function zoomOut() {
    if (scale > 0.4) {
        scale -= 0.2;
        lightboxImg.style.transform = `scale(${scale})`;
    }
} 