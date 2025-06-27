import { Box } from "@mui/material";
import Slider from "react-slick";
import { iconList } from "./ListIcon";
const Swipe = () => {
  const settings = {
    infinite: true, // lặp vô hạn
    speed: 10000, // tốc độ chạy (ms) → càng lớn càng mượt
    slidesToShow: 3, // số slide hiển thị
    slidesToScroll: 1, // mỗi lần cuộn 1 slide
    autoplay: true, // tự động chạy
    autoplaySpeed: 0, // không delay giữa các lần chạy
    cssEase: "linear", // hiệu ứng trượt đều (không bị giật)
    arrows: false, // ẩn nút bấm
    dots: false, // ẩn dấu chấm
    // draggable: true, // cho phép kéo bằng chuột (Muốn kéo phải tắt autoplays)
    // swipeToSlide: true, // cho phép swipe tới bất kỳ slide gần nhất khi kéo
    responsive: [
      {
        breakpoint: 768, // màn hình nhỏ hơn 768px
        settings: {
          slidesToShow: 2, // chỉ hiển thị 2 slide
        },
      },
    ],
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Slider {...settings}>
        {iconList.map((icon, index) => (
          <Box key={index}>{icon}</Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Swipe;
