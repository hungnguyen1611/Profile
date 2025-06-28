import { Box, Fab, Stack, Typography } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselProduct from "../Carousel/CarouselProduct";
export const RecentWorks = () => {
  return (
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Typography>
        <Box data-aos="fade-up">
          <Fab>
            <FaChevronLeft />
          </Fab>
          <Fab sx={{ ml: 2 }}>
            <FaChevronRight />
          </Fab>
        </Box>
      </Stack>
      <Box>
        <CarouselProduct />
      </Box>
    </Box>
  );
};
