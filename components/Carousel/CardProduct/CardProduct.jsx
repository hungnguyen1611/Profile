/* eslint-disable react/prop-types */
import { Box, Card, CardMedia, Typography } from "@mui/material";

export default function CardProduct({ image }) {
  return (
    <Box
      sx={{
        px: { xs: 1.5, md: 1 },
        maxWidth: 360,
        width: "100%",
        mx: "auto",
      }}
      className="hover_card_image"
    >
      <Card sx={{ borderRadius: 2 }}>
        <CardMedia
          component="img"
          image={image?.url}
          alt={image?.name || "Project image"}
          sx={{
            objectFit: "cover",
            aspectRatio: "16/9",
            maxHeight: 220,
          }}
        />
      </Card>
      <Typography fontFamily="Delius" className="gradient--text" variant="h5">
        {image?.name}
      </Typography>
    </Box>
  );
}
