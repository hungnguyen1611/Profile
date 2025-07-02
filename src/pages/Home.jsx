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
import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleCloseSideBar = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
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
      <Box sx={{ paddingBottom: 4, mb: 75 }}>
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
              {!user ? (
                <Link to="/login">
                  <Button className="btn-animation_login"></Button>
                </Link>
              ) : (
                <Button
                  onClick={handleLogout}
                  className="btn-animation_logout"
                ></Button>
              )}

              {user?.role === "admin" && (
                <Link to="/admin">
                  <Button className="btn-animation_admin"></Button>
                </Link>
              )}
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
        <List sx={{ width: 280 }} component={"nav"}>
          <ListItem>
            <LinkToSection to="contact">
              <Button className="btn-animation_let_talk"></Button>
            </LinkToSection>
          </ListItem>
          <ListItem>
            <LinkToSection to="Recent">
              <Button className="btn-animation_menu"></Button>
            </LinkToSection>
          </ListItem>
          {!user ? (
            <ListItem>
              <Link to="/login">
                <Button className="btn-animation_login"></Button>
              </Link>
            </ListItem>
          ) : (
            <ListItem>
              <Button
                onClick={handleLogout}
                className="btn-animation_logout"
              ></Button>
            </ListItem>
          )}
          <ListItem>
            {user?.role === "admin" && (
              <Link to="/admin">
                <Button className="btn-animation_admin"></Button>
              </Link>
            )}
          </ListItem>
        </List>
      </Drawer>

      <ButtonToTop />
    </>
  );
}
