/* eslint-disable react/prop-types */
import { Box, Card, CardMedia, Typography } from "@mui/material";

export default function CardProduct({ image }) {
  return (
    <Box sx={{ mr: 8 }}>
      <Card sx={{ borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={image}
          alt="Paella dish"
          sx={{ objectFit: "cover", aspectRatio: "16/9" }}
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
        <Box
          sx={{
            "&:first-of-type": { listStyleType: "none" },
          }}
          component={"li"}
        >
          Visual Art
        </Box>
        <Box component={"li"}>Visual Art</Box>
        <Box component={"li"}>Visual Art</Box>
      </Box>
      <Typography variant="h5">Visual Art</Typography>
    </Box>
  );
}
