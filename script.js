document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".purnima img");
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
        }, index * 1000); // Delay each image by 1 second
    });
});