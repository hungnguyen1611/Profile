import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import logo from "../../src/assets/images/logo.png";
import ReusableType from "../ReusableType/ReusableType";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import { MdArrowDownward, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Introduce() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Box data-aos="zoom-in">
      <Typography
        sx={{
          marginTop: {
            xs: 4,
            sm: 0,
          },
          paddingY: 2,
          textAlign: "center",
          fontSize: {
            xs: "2rem",
            sm: "3.75rem",
          },
          "&.MuiTypography-h2": {
            color: "transparent",
            WebkitTextStroke: (theme) => `1.5px ${theme.palette.text.primary}`, //  chỉ có thể dùng token trực tiếp (color,bgcolor,bordercolor...) ở đấy ko dùng được phải thông qua theme.palette
          },
        }}
        variant="h2"
      >
        <ReusableType texts={["Hi, I'm Dev Nguyen", "This is my portfolio"]} />
      </Typography>

      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            paddingY: 4,
            my: 2,
            order: {
              xs: 0,
              md: 1,
            },
          }}
        >
          <Avatar
            sx={{ width: 250, height: 250 }}
            alt="Hsemy Sharp"
            src={logo}
          />
        </Box>

        <Stack
          sx={{
            flex: 1,
            marginBottom: 4,
            paddingX: 4,
            justifyContent: "center",
            order: {
              xs: 0,
            },
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
                "&.MuiPaper-root": { marginTop: 0 },
              }}
            >
              <AccordionSummary
                sx={{
                  padding: 0,
                  "& .MuiAccordionSummary-content": { margin: 0 },
                  "&.MuiButtonBase-root": { minHeight: 0 },
                }}
                expandIcon={<MdArrowDownward color="#fff" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  {" "}
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
              4
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
              1
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
