import AOS from "aos";

export default function AOSINIT() {
  AOS.init({
    offset: 120, // Distance (in pixels) from the top of the viewport to trigger the animation
    duration: 600, // Animation duration in milliseconds
    easing: "ease-in-out", // Easing function for smooth animation
    once: false, // Animation will trigger every time the element enters the viewport
    mirror: true, // Animation will also trigger when scrolling back up (element leaves and re-enters viewport)
  });
}

// gọi AOS.refresh() sau khi update DOM để animation thực hiện
