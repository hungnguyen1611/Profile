import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdArrowDownward } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import ReusableType from "../ReusableType/ReusableType";

export default function Introduce() {
  return (
    <Box
      data-aos="zoom-in"
      sx={{
        bgcolor: "#0f172a",
        color: "#fff",
        borderRadius: 4,
        p: { xs: 3, md: 5 },
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 5 }}
        alignItems="center"
        justifyContent="center"
        sx={{ mb: 4 }}
      >
        <Avatar
          sx={{ width: 180, height: 180 }}
          alt="Hung Nguyen"
          src="/avatar.jpg"
        />
        <Typography
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: "2.25rem", sm: "3rem" },
            color: "#fff",
            "&.MuiTypography-h2": {
              color: "transparent",
              WebkitTextStroke: "1.5px #fff",
            },
          }}
          variant="h2"
        >
          <ReusableType
            texts={["Hi, I'm Hung Nguyen", "This is my portfolio"]}
          />
        </Typography>
      </Stack>

      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          gap: { xs: 4, md: 6 },
        }}
      >
        <Stack
          sx={{
            flex: 1,
            marginBottom: 2,
            paddingX: { xs: 1, md: 2 },
            justifyContent: "center",
            order: {
              xs: 0,
              md: 1,
            },
            textAlign: { xs: "center", md: "left" },
          }}
          spacing={4}
        >
          <Box>
            <Typography
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              variant="subtitle1"
            >
              Biography
            </Typography>
            {/* <Box>
              <Typography
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: isExpanded ? "unset" : 3, // Bỏ giới hạn dòng khi mở rộng
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  // textOverflow: "ellipsis",
                }}
                variant="body1"
              >
                Graduated in software engineering with a background in web
                design and development and nearly a year of experience as a
                Front-end Developer. Proficient in ReactJS, solid knowledge of
                HTML, CSS, JavaScript. My goal is to become a Front-end expert
                within 2 years by participating in projects and constantly
                learning and practicing professional skills
              </Typography>
              <Typography
                variant="body1"
                component={"button"}
                onClick={handleToggle}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.primary",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  padding: 0,
                }}
              >
                {isExpanded ? "compact" : "see more"}
                {isExpanded ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </Typography>
            </Box> */}

            <Accordion
              sx={{
                bgcolor: "transparent",
                "&.MuiAccordion-root": {
                  marginTop: "8px !important",
                },
                mt: 2,
              }}
            >
              <AccordionSummary
                sx={{
                  padding: 0,

                  "& .MuiAccordionSummary-content.Mui-expanded": { margin: 0 },
                  "&.MuiButtonBase-root": { minHeight: 0 },
                  "&MuiAccordionSummary-content": { margin: 0 },
                }}
                expandIcon={<MdArrowDownward color="#fff" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  Graduated in software engineering with a background in web
                  design and development and nearly a year of experience as a
                  Front-end Developer.
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Typography>
                  Graduated in software engineering with a background in web
                  design and development and nearly a year of experience as a
                  Front-end Developer. Proficient in ReactJS, solid knowledge of
                  HTML, CSS, JavaScript. My goal is to become a Front-end expert
                  within 2 years by participating in projects and constantly
                  learning and practicing professional skills
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              variant="subtitle1"
            >
              Skills
            </Typography>
            {/* <Typography variant="subtitle1">Web Development</Typography> */}
            <Box component={"ul"}>
              <Box component={"li"}>
                <span className="gradient--text">Language:</span> Javascript,
                TypeScript, Html, CSS
              </Box>
              <Box component={"li"}>
                <span className="gradient--text">Framework & Library:</span>
                ReactJS, NextJS, Ether.js, Redux, Redux-toolkit, redux-persist
                Zustand, socket.io,MongoDB Node.js Driver
              </Box>
              <Box component={"li"}>
                <span className="gradient--text">Library UI:</span>
                Material UI, Ant Design,AOS, react-type-animation, react-slick,
                Axios, react-toastify, dnd-kit
              </Box>
              <Box component={"li"}>
                <span className="gradient--text">Database:</span> MongoDB,
                Firebase
              </Box>
              <Box component={"li"}>
                <span className="gradient--text">Version control:</span> Git
              </Box>
              <Box component={"li"}>
                <span>Tools:</span> VSCode, Postman,Github, GitLab
              </Box>
              <Box component={"li"}>
                <span className="gradient--text">Other:</span> Figma, Trello
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              variant="subtitle1"
            >
              Contact
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Box
                component={"a"}
                target="_blank"
                href="https://www.facebook.com/hung.nguyen.693851"
              >
                <Avatar
                  sx={{
                    "&:hover": { bgcolor: "#5EABD6", svg: { fill: "#fff" } },
                  }}
                >
                  <FaFacebook />
                </Avatar>
              </Box>
              <Box component={"a"} href="tel:0386905265">
                <Avatar
                  sx={{
                    "&:hover": { bgcolor: "#FFB4B4", svg: { fill: "#fff" } },
                  }}
                >
                  <FaPhone />
                </Avatar>
              </Box>
              <Box
                component={"a"}
                href="mailto:nguyenquochung16112003@gmail.com"
              >
                <Avatar
                  sx={{
                    "&:hover": { bgcolor: "#FEFBC7", svg: { fill: "#ddd" } },
                  }}
                >
                  <SiGmail />
                </Avatar>
              </Box>
            </Stack>
          </Box>
        </Stack>

        <Stack
          sx={{
            flex: 1,
            gap: 2,
            alignSelf: "flex-start",
            flexWrap: "wrap",
            alignItems: {
              xs: "flex-start",
              md: "flex-end",
            },
            justifyContent: {
              xs: "center",
              md: "flex-end",
            },
            order: {
              xs: 2,
            },
            flexDirection: {
              xs: "row",
              md: "column",
            },
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              variant="h6"
            >
              Projects Done
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: {
                  xs: "center",
                  md: "right",
                },
              }}
              variant="h2"
            >
              7
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
              variant="h6"
            >
              Years of Experience
            </Typography>
            <Typography
              sx={{
                textTransform: "uppercase",
                textAlign: {
                  xs: "center",
                  md: "right",
                },
              }}
              variant="h2"
            >
              2
            </Typography>
          </Box>

          <Box
            sx={{
              textAlign: {
                xs: "center",
                md: "right",
              },
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              variant="h6"
            >
              EDUCATION
            </Typography>

            <Box
              sx={{
                mt: 0.9,
                listStyleType: "none",
                textAlign: {
                  xs: "center",
                  md: "right",
                },
              }}
              component={"li"}
            >
              BACH KHOA SAIGON COLLEGE | 2021 - 2024 <br /> Major: Software
              engineerin
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
