import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import ReusableType from "../ReusableType/ReusableType";
export default function Introduce() {
  return (
    <Box data-aos="zoom-in">
      <Typography
        sx={{
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
            alt="Remy Sharp"
            src="./src/assets/images/image.png"
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
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
              variant="subtitle1"
            >
              Skills
            </Typography>
            <Typography variant="subtitle1">Web Development</Typography>
            <Box component={"ul"}>
              <Box component={"li"}>UI & UX Design</Box>
              <Box component={"li"}>Frontend Development</Box>
              <Box component={"li"}>Backend Development</Box>
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
                <Avatar>
                  <FaFacebook />
                </Avatar>
              </Box>
              <Box component={"a"} href="tel:0385905265">
                <Avatar>
                  <FaPhone />
                </Avatar>
              </Box>
              <Box
                component={"a"}
                href="mailto:nguyenquochung16112003@gmail.com"
              >
                <Avatar>
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
            alignItems: "flex-end",
            order: {
              xs: 2,
            },
            flexDirection: {
              xs: "row",
              md: "column",
            },
          }}
        >
          <Box>
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

          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                "&.MuiTypography-root": {
                  textAlign: "right",
                },
              }}
              variant="subtitle1"
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
        </Stack>
      </Stack>
    </Box>
  );
}
