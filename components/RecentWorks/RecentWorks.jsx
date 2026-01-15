import { Box, Stack, Typography } from "@mui/material";
import { Element } from "react-scroll";
import CardProduct from "../Carousel/CardProduct/CardProduct";

const projects = [
  {
    url: "/tiengtrungms.png",
    name: "Tiếng Trung MS",
    href: "https://tiengtrungms.vn",
  },
  {
    url: "/mmoweb3.png",
    name: "MMO WEB3",
    href: "https://mmoweb3.com",
  },
  {
    url: "/pauseproject.png",
    name: "PauseProject",
    href: "https://pauseproject.site/",
  },
  {
    url: "/multiwallet.png",
    name: "MULTI WALLET",
    href: "https://chromewebstore.google.com/detail/multi-wallet/nlgnepoeokdfodgjkjiblkadkjbdfmgd?hl=vi&utm_source=ext_sidebar",
  },
  {
    url: "/sunqueenhalonghotel.png",
    name: "Sun Queen Ha Long Hotel",
    href: "https://sunqueenhalonghotel.com.vn/",
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
          {projects.map((project, index) => {
            const isLastItem = index === projects.length - 1;
            const isOddNumber = projects.length % 2 !== 0;
            const isAloneOnRow = isLastItem && isOddNumber;

            return (
              <Box
                key={index}
                component={"a"}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                sx={{
                  textDecoration: "none",
                  gridColumn: isAloneOnRow
                    ? { xs: "1", sm: "1 / -1" }
                    : "auto",
                  justifySelf: isAloneOnRow ? "center" : "auto",
                  maxWidth: isAloneOnRow ? { xs: "100%", sm: 360 } : "100%",
                }}
              >
                <CardProduct image={project} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Element>
  );
};
