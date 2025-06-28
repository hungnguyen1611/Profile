/* eslint-disable react/prop-types */
import { IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { IoIosMenu } from "react-icons/io";
export default function NavBar({ handleCloseSideBar }) {
  return (
    <AppBar
      sx={{ bgcolor: "background.light" }}
      position="static"
      component={"nav"}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{
            paddingY: 2,
            textAlign: "center",
            textTransform: "uppercase",
            "&.MuiTypography-h6": {
              color: "transparent",
              WebkitTextStroke: (theme) =>
                `0.2px ${theme.palette.text.primary}`, //  chỉ có thể dùng token trực tiếp (color,bgcolor,bordercolor...) ở đấy ko dùng được phải thông qua theme.palette
            },
          }}
          variant="h6"
        >
          dev nguyen
        </Typography>

        <IconButton onClick={handleCloseSideBar} color="inherit">
          <IoIosMenu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
