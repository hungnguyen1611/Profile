import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import NavBar from "../../components/AppBar/NavBar";
import Contact from "../../components/Contact/Contact";
import Introduce from "../../components/Introduce/Introduce";
import { RecentWorks } from "../../components/RecentWorks/RecentWorks";
import Swipe from "./../../components/Swipe/Swipe";
export default function Home() {
  return (
    <Box sx={{ paddingBottom: 4 }}>
      <NavBar />
      <Container>
        <Box
          component={"header"}
          sx={{
            display: "flex",
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
  );
}
