import { Box, Button, Container, Drawer, List, ListItem, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/AppBar/NavBar";
import ButtonToTop from "../../components/ButtonToTop/ButtonToTop";
import Footer from "../../components/Footer/Footer";
import Introduce from "../../components/Introduce/Introduce";
import { LinkToSection } from "../../components/LinkToSection/LinkToSection";
import { RecentWorks } from "../../components/RecentWorks/RecentWorks";
import Swipe from "./../../components/Swipe/Swipe";
export default function Home() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleCloseSideBar = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  // useEffect(() => {
  //   sendInfo_API({
  //     name: "call_server",
  //     email: "call_server@gmail.com",
  //     message: "call_server_message",
  //   });
  // }, []);

  return (
    <>
      <Box sx={{ paddingBottom: 4, bgcolor: "background.default" }}>
        <NavBar handleCloseSideBar={handleCloseSideBar} />
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Box
            component={"header"}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 4,
              paddingY: 3,
              position: "sticky",
              zIndex: 1,
              top: 0,
              left: 0,
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <LinkToSection to="Recent">
                <Button className="btn-animation_menu"></Button>
              </LinkToSection>
              {user && (
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

          <Stack spacing={{ xs: 8, md: 10 }} sx={{ mt: 4, mb: 6 }}>
            <Introduce />
            <Swipe />
            <RecentWorks />
            <Footer />
          </Stack>
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
            <LinkToSection to="Recent">
              <Button className="btn-animation_menu"></Button>
            </LinkToSection>
          </ListItem>
          {user && (
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
