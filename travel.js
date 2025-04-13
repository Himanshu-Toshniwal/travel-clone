AOS.init();
const sliderImage = ["front-image.jpg", "img1.jpg", "img2.png", "img3.png", "img15.png", "img5.png", "img6.png", "img7.jpg", "img8.jpg", "img9.jpg", "img10.jpg", "img11.jpg"];
let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
  changeSliderImage();
}, 5000)

const changeSliderImage = () => {
    sliderGridItems.map((gridItem, index) => {
        setTimeout(() => {
        gridItem.classList.remove('hide');

        setTimeout(() => {
        if (index == sliderGridItems.length - 1){
          if(currentImage > sliderImage.length - 1){
            currentImage = 0;
          }else{
            currentImage++;
          }

          slider.src = `${sliderImage[currentImage]}`;
          

          sliderGridItems.map((item, i) => {
            setTimeout(() => {
              item.classList.add('hide');
            }, i*100)
          })
        }
        }, 100);

        }, index * 100);
    })
}

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
  if(scrollY > 188){
    navbar.classList.add('bg')
  }else{
    navbar.classList.remove('bg')
  }
})

document.addEventListener("DOMContentLoaded", () => {
  const videoLink = document.getElementById("video-link");
  const travelVideo1 = document.getElementById("travel-video1");
  const travelVideo2 = document.getElementById("travel-video2");
  const travelVideo3 = document.getElementById("travel-video3");

  videoLink.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("video-section").scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
          travelVideo1.play();
          travelVideo2.play();
          travelVideo3.play();
      }, 500); 
  });
});