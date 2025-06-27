import { Box } from "@mui/material";
import Slider from "react-slick";
import CardProduct from "./CardProduct/CardProduct";

export default function CarouselProduct() {
  const listImages = [
    "https://i.pinimg.com/736x/a5/4d/93/a54d93e887a3e6ae6db8089a5f01bb48.jpg",
    "https://i.pinimg.com/736x/73/40/09/7340099e471dd832e7fbee2427555925.jpg",
    "https://i.pinimg.com/736x/d2/f2/f7/d2f2f7a0b3c91ee7ce82a59f2817dcef.jpg",
    "https://i.pinimg.com/736x/9a/ea/14/9aea14245729922d70e034c01fd4e953.jpg",
  ];
  const settings = {
    infinite: true, // lặp vô hạn
    speed: 10000, // tốc độ chạy (ms) → càng lớn càng mượt
    slidesToShow: 2, // số slide hiển thị
    slidesToScroll: 1, // mỗi lần cuộn 1 slide
    autoplay: true, // tự động chạy
    autoplaySpeed: 0, // không delay giữa các lần chạy
    cssEase: "linear", // hiệu ứng trượt đều (không bị giật)
    arrows: false, // ẩn nút bấm
    dots: false, // ẩn dấu chấm
    responsive: [
      {
        breakpoint: 768, // màn hình nhỏ hơn 768px
        settings: {
          slidesToShow: 1, // chỉ hiển thị 1 slide
        },
      },
    ],
  };
  return (
    <Box data-aos="fade-left">
      <Slider {...settings}>
        {listImages.map((image, index) => (
          <CardProduct image={image} key={index} />
        ))}
      </Slider>
    </Box>
  );
}
