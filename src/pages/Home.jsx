import { Box, Button, Container, Drawer, List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import NavBar from "../../components/AppBar/NavBar";
import Contact from "../../components/Contact/Contact";
import Introduce from "../../components/Introduce/Introduce";
import { RecentWorks } from "../../components/RecentWorks/RecentWorks";
import Swipe from "./../../components/Swipe/Swipe";
export default function Home() {
  const [open, setOpen] = useState(false);

  const handleCloseSideBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={{ paddingBottom: 4 }}>
        <NavBar handleCloseSideBar={handleCloseSideBar} />
        <Container>
          <Box
            component={"header"}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              justifyContent: "space-between",
              alignItems: "center",
              mt: 4,
              paddingY: 3,
              position: "sticky",
              top: 0,
              left: 0,
            }}
          >
            <Typography variant="h4">Profile</Typography>
            <Box>
              {/* <button className="btn-slide">
                <span className="btn-text default">Click me</span>
                <span className="btn-text hover">Go now</span>
              </button> */}

              {/* <Button className="btn-slide">
                <span className="btn-text default">Click me</span>
                <span className="btn-text hover">
                  Go now <FaChevronRight style={{ marginLeft: 5 }} />
                </span>
              </Button>
              <Button className="btn-slide">
                <span className="btn-text default">MENU</span>
                <span className="btn-text hover">
                  Go now <FaChevronRight style={{ marginLeft: 5 }} />
                </span>
              </Button> */}
              <Button className="btn-animation_let_talk"></Button>
              <Button className="btn-animation_menu"></Button>
            </Box>
          </Box>

          <Introduce />

          <Swipe />
          <RecentWorks />

          <Contact />
        </Container>
      </Box>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "background.light",
          },
        }}
        open={open}
        onClose={handleCloseSideBar}
      >
        <List sx={{ width: 250 }} component={"nav"}>
          <ListItem disablePadding>
            <Button className="btn-animation_let_talk"></Button>
          </ListItem>
          <ListItem disablePadding>
            <Button className="btn-animation_menu"></Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
