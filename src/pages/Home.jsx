import { Box, Button, Container, Drawer, List, ListItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { sendInfo_API } from "../../APIS";
import NavBar from "../../components/AppBar/NavBar";
import ButtonToTop from "../../components/ButtonToTop/ButtonToTop";
import Contact from "../../components/Contact/Contact";
import Introduce from "../../components/Introduce/Introduce";
import { LinkToSection } from "../../components/LinkToSection/LinkToSection";
import { RecentWorks } from "../../components/RecentWorks/RecentWorks";
import Swipe from "./../../components/Swipe/Swipe";
export default function Home() {
  const [open, setOpen] = useState(false);

  const handleCloseSideBar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    sendInfo_API({
      name: "call_server",
      email: "call_server@gmail.com",
      message: "call_server_message",
    });
  }, []);
  return (
    <>
      <Box height={"10000px"} sx={{ paddingBottom: 4 }}>
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
              zIndex: 1,
              top: 0,
              left: 0,
            }}
          >
            <Typography variant="h4">Profile</Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <LinkToSection to="contact">
                <Button className="btn-animation_let_talk"></Button>
              </LinkToSection>

              <LinkToSection to="Recent">
                <Button className="btn-animation_menu"></Button>
              </LinkToSection>
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
            <LinkToSection to="contact">
              <Button className="btn-animation_let_talk"></Button>
            </LinkToSection>
          </ListItem>
          <ListItem disablePadding>
            <LinkToSection to="Recent">
              <Button className="btn-animation_menu"></Button>
            </LinkToSection>
          </ListItem>
        </List>
      </Drawer>

      <ButtonToTop />
    </>
  );
}
