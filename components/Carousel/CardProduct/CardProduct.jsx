/* eslint-disable react/prop-types */
import { Box, Card, CardMedia, Typography } from "@mui/material";

export default function CardProduct({ image }) {
  return (
    <Box
      sx={{
        px: {
          xs: 4,
          md: 2,
        },
      }}
      className="hover_card_image"
    >
      <Card sx={{ borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={image?.url}
          alt="Paella dish"
          sx={{
            objectFit: "cover",
            aspectRatio: "16/9",
          }}
        />
      </Card>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          paddingInlineStart: 0,
        }}
        component={"ul"}
      >
        {/* <Box
          sx={{
            "&:first-of-type": { listStyleType: "none" },
          }}
          component={"li"}
        >
          Visual Art
        </Box>
        <Box component={"li"}>Visual Art</Box>
        <Box component={"li"}>Visual Art</Box> */}
      </Box>
      <Typography fontFamily="Delius" className="gradient--text" variant="h5">
        {image?.name}
      </Typography>
    </Box>
  );
}
