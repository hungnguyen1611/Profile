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
      <Box
        sx={{
          position: "relative",
          borderRadius: 3,
          padding: "2px",
          background: "linear-gradient(45deg, #06B6D4, #3B82F6, #06B6D4)",
          boxShadow: "0 4px 20px rgba(6, 182, 212, 0.2)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
          "&:hover": {
            boxShadow: "0 12px 48px rgba(6, 182, 212, 0.6)",
            transform: "translateY(-12px) scale(1.02)",
            padding: "3px",
            "& .image-overlay": {
              opacity: 1,
            },
            "& .view-project-container": {
              opacity: 1,
              "& .view-project-btn": {
                transform: "translateY(0)",
              },
            },
            "& .project-image": {
              transform: "scale(1.03)",
              filter: "brightness(0.8) contrast(1.05)",
            },
            "&::before": {
              opacity: 1,
            },
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.2))",
            opacity: 0,
            transition: "opacity 0.4s ease",
            zIndex: 1,
            pointerEvents: "none",
          },
        }}
      >
        <Card
          sx={{
            borderRadius: 2.5,
            overflow: "hidden",
            backgroundColor: "#0f172a",
            height: "100%",
            position: "relative",
          }}
        >
          <CardMedia
            component="img"
            image={image?.url}
            alt={image?.name || "Project image"}
            className="project-image"
            sx={{
              objectFit: "cover",
              width: "100%",
              height: { xs: 400, md: 500 },
              backgroundColor: "#f5f5f5",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease",
              filter: "brightness(1) contrast(1)",
              position: "relative",
              zIndex: 1,
            }}
          />
          <Box
            className="image-overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, transparent 0%, rgba(6, 182, 212, 0.4) 100%)",
              opacity: 0,
              transition: "opacity 0.4s ease",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
              pointerEvents: "none",
              opacity: 0,
              transition: "opacity 0.4s ease",
              "& .view-project-btn": {
                transform: "translateY(20px)",
                transition: "transform 0.4s ease 0.1s",
              },
            }}
            className="view-project-container"
          >
            <Box
              className="view-project-btn"
              sx={{
                background: "rgba(15, 23, 42, 0.95)",
                px: 3,
                py: 1.5,
                borderRadius: 2,
                border: "2px solid #06B6D4",
                boxShadow: "0 4px 20px rgba(6, 182, 212, 0.4)",
              }}
            >
              <Typography
                sx={{
                  color: "#06B6D4",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                View Project →
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
      <Typography
        fontFamily="Delius"
        className="gradient--text"
        variant="h5"
        sx={{
          mt: 2,
          mb: 1,
          fontWeight: 600,
          textAlign: "center",
          transition: "all 0.3s ease",
          position: "relative",
          "&:hover": {
            transform: "translateY(-3px) scale(1.05)",
            textShadow: "0 4px 12px rgba(6, 182, 212, 0.5)",
          },
        }}
      >
        {image?.name}
      </Typography>
    </Box>
  );
}
