import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropup } from "react-icons/io";

export default function ButtonToTop() {
  return (
    <ScrollToTop
      smooth
      component={<IoIosArrowDropup />}
      style={{
        background: "transparent",
        bottom: 70,
        right: 40,
        color: "#ff82f3",
        fontSize: "2.5rem",
        padding: 0,
        borderRadius: "50%",
        boxShadow: "0 0 10px #ff82f3",
        // boxShadow: 'none'
        // stroke: "#fff",
        // fill: "#fff",
      }}
    />
  );
}
