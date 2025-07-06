import { Box, Fab, Stack, Typography } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselProduct from "../Carousel/CarouselProduct";
import { Element } from "react-scroll";
import { useRef } from "react";
export const RecentWorks = () => {
  const slideRef = useRef(null);
  return (
    <Element name="Recent">
      <Box
        sx={{
          bgcolor: "background.light",
          mt: 10,
          paddingY: 8,
          borderRadius: 5,
        }}
      >
        <Stack spacing={2.5} sx={{ mb: 8, px: { xs: 4, md: 20 } }}>
          <Typography
            data-aos="fade-up"
            variant="h3"
            sx={{ fontWeight: "bold", fontSize: { xs: "2rem", sm: "3.75rem" } }}
          >
            Recent&nbsp;
            <span className="gradient--text">Works</span>
          </Typography>
          <Typography data-aos="fade-up" component={"p"}>
            A selection of recent projects focused on delivering smooth user
            experiences and real-world performance.
          </Typography>
          <Box data-aos="fade-up">
            <Fab onClick={() => slideRef.current?.slickPrev()}>
              <FaChevronLeft />
            </Fab>
            <Fab onClick={() => slideRef.current?.slickNext()} sx={{ ml: 2 }}>
              <FaChevronRight />
            </Fab>
          </Box>
        </Stack>
        {/* Cần có lớp box dùng overflow: hidden để ko bị dư không gian khi dùng animation hoặc overflow: hidden với thẻ cha gần nhất  */}
        <Box sx={{ overflow: "hidden" }}>
          <CarouselProduct ref={slideRef} />
        </Box>
      </Box>
    </Element>
  );
};
