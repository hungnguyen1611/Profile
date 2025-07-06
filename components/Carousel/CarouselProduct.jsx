import { Box } from "@mui/material";
import Slider from "react-slick";
import CardProduct from "./CardProduct/CardProduct";
import { forwardRef } from "react";

function CarouselProduct(props, ref) {
  const listImages = [
    {
      url: "https://i.pinimg.com/736x/a5/4d/93/a54d93e887a3e6ae6db8089a5f01bb48.jpg",
      name: "MMO WEB3",
      href: "https://mmoweb3.com",
    },
    {
      url: "https://i.pinimg.com/736x/73/40/09/7340099e471dd832e7fbee2427555925.jpg",
      name: "TRELLO WEB",
      href: "https://trello-web-flame.vercel.app",
    },
    {
      url: "https://i.pinimg.com/736x/d2/f2/f7/d2f2f7a0b3c91ee7ce82a59f2817dcef.jpg",
      name: "MULTI WALLET",
      href: "https://chromewebstore.google.com/detail/multi-wallet/nlgnepoeokdfodgjkjiblkadkjbdfmgd?hl=vi&utm_source=ext_sidebar",
    },
    {
      url: "https://i.pinimg.com/736x/9a/ea/14/9aea14245729922d70e034c01fd4e953.jpg",
      name: "PORFOLIO",
      href: "https://hungnguyen1611.online",
    },
  ];
  const settings = {
    // infinite: true, // lặp vô hạn
    speed: 1000, // tốc độ chạy (ms) → càng lớn càng mượt => càng thấp càng nhanh
    slidesToShow: 2, // số slide hiển thị
    slidesToScroll: 1, // mỗi lần cuộn 1 slide
    // autoplay: true, // tự động chạy
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
      <Slider ref={ref} {...settings}>
        {listImages.map((image, index) => (
          <Box
            className="slider-custom"
            key={index}
            component={"a"}
            href={image.href}
            target="_blank"
          >
            <CardProduct image={image} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default forwardRef(CarouselProduct);
