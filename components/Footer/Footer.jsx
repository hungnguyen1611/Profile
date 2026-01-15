import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { SiGmail, SiZalo } from "react-icons/si";

export default function Footer() {
  const linkStyle = {
    color: "inherit",
    textDecoration: "none",
    transition: "all 0.3s ease",
      "&:hover": {
        color: "#06B6D4",
        transform: "translateX(5px)",
      },
  };

  const iconStyle = {
    fontSize: "1.2rem",
    transition: "all 0.3s ease",
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0f172a",
        color: "#fff",
        mt: 10,
        borderTop: "1px solid rgba(255,255,255,0.12)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, #06B6D4, #3B82F6, transparent)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={5}>
            <Box>
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{
                  mb: 2,
                  background: "linear-gradient(45deg, #06B6D4, #3B82F6 50%, #0EA5E9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Hung Nguyen
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  opacity: 0.85,
                  lineHeight: 1.8,
                  fontSize: "0.95rem",
                }}
              >
                Fullstack Developer focused on building end-to-end web solutions,
                great UX, scalable backends, and real-world performance.
              </Typography>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3.5}>
            <Typography
              fontWeight={700}
              sx={{
                mb: 3,
                fontSize: "1.1rem",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  background: "linear-gradient(90deg, #06B6D4, #3B82F6)",
                  borderRadius: "2px",
                },
              }}
            >
              Contact
            </Typography>
            <Stack spacing={2.5}>
              <Box
                component="a"
                href="tel:0386905265"
                sx={{
                  ...linkStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 0.5,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: "8px",
                    bgcolor: "rgba(6, 182, 212, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaPhone style={iconStyle} />
                </Box>
                <Typography sx={{ fontSize: "0.95rem" }}>
                  +84 386 905 265
                </Typography>
              </Box>
              <Box
                component="a"
                href="mailto:nguyenquochung16112003@gmail.com"
                sx={{
                  ...linkStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 0.5,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: "8px",
                    bgcolor: "rgba(6, 182, 212, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiGmail style={iconStyle} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    wordBreak: "break-word",
                  }}
                >
                  nguyenquochung16112003@gmail.com
                </Typography>
              </Box>
              <Box
                component="a"
                href="https://zalo.me/0386905265"
                target="_blank"
                rel="noreferrer"
                sx={{
                  ...linkStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 0.5,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: "8px",
                    bgcolor: "rgba(6, 182, 212, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SiZalo style={iconStyle} />
                </Box>
                <Typography sx={{ fontSize: "0.95rem" }}>0386905265</Typography>
              </Box>
              <Box
                component="a"
                href="https://www.facebook.com/hung.nguyen.693851"
                target="_blank"
                rel="noreferrer"
                sx={{
                  ...linkStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  py: 0.5,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: "8px",
                    bgcolor: "rgba(6, 182, 212, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaFacebook style={iconStyle} />
                </Box>
                <Typography sx={{ fontSize: "0.95rem" }}>Facebook</Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Navigation Section */}
          <Grid item xs={12} sm={6} md={3.5}>
            <Typography
              fontWeight={700}
              sx={{
                mb: 3,
                fontSize: "1.1rem",
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "2px",
                  background: "linear-gradient(90deg, #06B6D4, #3B82F6)",
                  borderRadius: "2px",
                },
              }}
            >
              Navigation
            </Typography>
            <Stack spacing={2}>
              <ScrollLink
                to="Recent"
                spy
                smooth
                offset={-80}
                duration={400}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    ...linkStyle,
                    cursor: "pointer",
                    py: 0.5,
                    fontSize: "0.95rem",
                  }}
                >
                  Recent Works
                </Typography>
              </ScrollLink>
              <ScrollLink
                to="top"
                spy={false}
                smooth
                offset={-80}
                duration={400}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  sx={{
                    ...linkStyle,
                    cursor: "pointer",
                    py: 0.5,
                    fontSize: "0.95rem",
                  }}
                >
                  Back to top
                </Typography>
              </ScrollLink>
            </Stack>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 5,
            borderColor: "rgba(255,255,255,0.1)",
            background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)",
          }}
        />

        {/* About Me Section */}
        <Box
          sx={{
            mb: 5,
            p: 4,
            borderRadius: "16px",
            background: "linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)",
            border: "1px solid rgba(6, 182, 212, 0.2)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: "linear-gradient(90deg, #06B6D4, #3B82F6, #06B6D4)",
            },
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mb: 3,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: 0,
                width: "60px",
                height: "3px",
                background: "linear-gradient(90deg, #06B6D4, #3B82F6)",
                borderRadius: "2px",
              },
            }}
          >
            About Me
          </Typography>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  opacity: 0.9,
                  mb: 2,
                }}
              >
                I am a Fullstack Developer passionate about creating complete web solutions from 
                frontend to backend. With expertise in Next.js, TypeScript, JavaScript, Node.js, and 
                modern web technologies, I build scalable, high-performance full-stack applications 
                with exceptional user experiences.
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.9,
                  opacity: 0.9,
                }}
              >
                My passion is designing and implementing end-to-end solutions, working with both 
                client and server-side technologies. I continuously improve my skills across the 
                entire stack to deliver the best value for every project. I believe in writing code 
                that is not only functional but also readable, maintainable, and scalable.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "#06B6D4",
                      fontSize: "0.95rem",
                    }}
                  >
                    Main Skills:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      opacity: 0.85,
                      lineHeight: 1.8,
                    }}
                  >
                    Next.js • TypeScript • JavaScript • Node.js • HTML/CSS • Tailwind CSS • Material-UI • 
                    MongoDB • Responsive Design • Performance Optimization • Git
                  </Typography>
                </Box>
                
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "#06B6D4",
                      fontSize: "0.95rem",
                    }}
                  >
                    Interests:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      opacity: 0.85,
                      lineHeight: 1.8,
                    }}
                  >
                    Coding • Learning new technologies • Creating beautiful UI/UX • 
                    Sharing knowledge with the community
                  </Typography>
                </Box>
                
                <Box>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      color: "#06B6D4",
                      fontSize: "0.95rem",
                    }}
                  >
                    Goals:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      opacity: 0.85,
                      lineHeight: 1.8,
                    }}
                  >
                    To become a Senior Fullstack Developer and contribute to building 
                    complete, scalable web applications that positively impact users.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider
          sx={{
            my: 4,
            borderColor: "rgba(255,255,255,0.1)",
            background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              opacity: 0.8,
              fontSize: "0.9rem",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            © {new Date().getFullYear()} Hung Nguyen. All rights reserved.
          </Typography>
          <Typography
            sx={{
              opacity: 0.6,
              fontSize: "0.85rem",
              textAlign: { xs: "center", sm: "right" },
            }}
          >
            Built with passion and attention to detail
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

