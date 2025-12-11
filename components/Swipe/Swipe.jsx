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
    // responsive: [
    //   {
    //     breakpoint: 768, // màn hình nhỏ hơn 768px
    //     settings: {
    //       slidesToShow: 2, // chỉ hiển thị 2 slide
    //     },
    //   },
    // ],
  };

  return (
    <Box
      sx={{
        mt: 6,
        bgcolor: "#0f172a",
        color: "#fff",
        borderRadius: 4,
        p: { xs: 2, md: 3 },
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <Slider {...settings}>
        {iconList.map((icon, index) => (
          <Box
            sx={{
              px: { xs: 0.25, sm: 0.75 },
              "& svg": {
                fontSize: {
                  xs: "28px",
                  sm: "56px",
                  md: "84px",
                },
                color: "#fff",
              },
            }}
            key={index}
          >
            {icon}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Swipe;
