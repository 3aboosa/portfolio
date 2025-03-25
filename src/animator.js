import { DotLottie } from '@lottiefiles/dotlottie-web';

const paperPlane = new DotLottie({
  autoplay: false,
  loop: false,
  canvas: document.getElementById("paper-plane"),
  src: "src/animations/paper_plane.lottie"
});

const canvas = document.querySelector("canvas");

canvas.addEventListener("mouseover", (event) => {
  paperPlane.setLoop(true)
  paperPlane.play();
})

canvas.addEventListener("mouseout", (event) => {
  paperPlane.setLoop(false)
});

