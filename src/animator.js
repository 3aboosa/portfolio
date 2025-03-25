import { DotLottie } from '@lottiefiles/dotlottie-web';

const paperPlane = new DotLottie({
  autoplay: false,
  loop: true,
  canvas: document.getElementById("paper-plane"),
  src: "src/animations/paper_plane.lottie"
});