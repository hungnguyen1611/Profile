import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const linkStyle = { color: "inherit", textDecoration: "none" };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "#fff",
        mt: 10,
        borderTop: "1px solid rgba(255,255,255,0.12)",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "flex-start" }}
          flexWrap="wrap"
          rowGap={4}
          columnGap={6}
        >
          <Box sx={{ maxWidth: 420 }}>
            <Typography variant="h5" fontWeight={800}>
              Hung Nguyen
            </Typography>
            <Typography sx={{ mt: 1.2, opacity: 0.85 }}>
              Front-end Developer focused on building smooth web experiences,
              great UX, and real-world performance.
            </Typography>
          </Box>

          <Stack spacing={2} sx={{ minWidth: { xs: "100%", md: 240 } }}>
            <Typography fontWeight={700}>Contact</Typography>
            <Box component="a" href="tel:0386905265" sx={linkStyle}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <FaPhone /> <Typography>+84 386 905 265</Typography>
              </Stack>
            </Box>
            <Box
              component="a"
              href="mailto:nguyenquochung16112003@gmail.com"
              sx={linkStyle}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <SiGmail /> <Typography>nguyenquochung16112003@gmail.com</Typography>
              </Stack>
            </Box>
            <Box
              component="a"
              href="https://www.facebook.com/hung.nguyen.693851"
              target="_blank"
              rel="noreferrer"
              sx={linkStyle}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <FaFacebook /> <Typography>Facebook</Typography>
              </Stack>
            </Box>
          </Stack>

          <Stack
            spacing={1.5}
            sx={{ minWidth: { xs: "100%", sm: 220 }, maxWidth: 260 }}
          >
            <Typography fontWeight={700}>Navigation</Typography>
            <ScrollLink
              to="Recent"
              spy
              smooth
              offset={-80}
              duration={400}
              style={linkStyle}
            >
              <Typography>Recent Works</Typography>
            </ScrollLink>
            <ScrollLink
              to="top"
              spy={false}
              smooth
              offset={-80}
              duration={400}
              style={linkStyle}
            >
              <Typography>Back to top</Typography>
            </ScrollLink>
          </Stack>
        </Stack>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />

        <Typography sx={{ opacity: 0.8 }} variant="body2">
          © {new Date().getFullYear()} Hung Nguyen. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

