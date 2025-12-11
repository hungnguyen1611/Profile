import { Box, Stack, Typography } from "@mui/material";
import { Element } from "react-scroll";
import CardProduct from "../Carousel/CardProduct/CardProduct";

const projects = [
  {
    url: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
    name: "MMO WEB3",
    href: "https://mmoweb3.com",
  },
  {
    url: "https://i.pinimg.com/736x/73/40/09/7340099e471dd832e7fbee2427555925.jpg",
    name: "TRELLO WEB",
    href: "https://trello-web-flame.vercel.app",
  },
  {
    url: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    name: "MULTI WALLET",
    href: "https://chromewebstore.google.com/detail/multi-wallet/nlgnepoeokdfodgjkjiblkadkjbdfmgd?hl=vi&utm_source=ext_sidebar",
  },
  {
    url: "https://i.pinimg.com/736x/9a/ea/14/9aea14245729922d70e034c01fd4e953.jpg",
    name: "PORFOLIO",
    href: "https://hungnguyen1611.online",
  },
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    name: "PauseProject",
    href: "https://pauseproject.site/",
  },
  {
    url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    name: "EqualHire",
    href: "https://equalhire.site/",
  },
  {
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    name: "MYBM Portal",
    href: "https://mybm.io/portal",
  },
];

export const RecentWorks = () => {
  return (
    <Element name="Recent">
      <Box
        sx={{
          bgcolor: "#0f172a",
          color: "#fff",
          mt: 10,
          paddingY: { xs: 6, md: 8 },
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <Stack spacing={2.5} sx={{ mb: 8, px: { xs: 3, md: 8 } }}>
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
        </Stack>

        <Box
          data-aos="fade-left"
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
            },
            gap: { xs: 3, md: 4 },
            px: { xs: 3, md: 8 },
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              component={"a"}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              sx={{ textDecoration: "none" }}
            >
              <CardProduct image={project} />
            </Box>
          ))}
        </Box>
      </Box>
    </Element>
  );
};
