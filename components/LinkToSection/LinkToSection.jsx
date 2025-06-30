/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

export const LinkToSection = ({ children, to }) => {
  return (
    <Link
      to={to}
      spy={true}
      //   spy={true} // dùng để theo dõi (observe) vị trí cuộn của trang và tự động cập nhật "active class" cho phần tử đang nằm trong vùng nhìn thấy của người dùng.
      activeClass="active_section"
      smooth={true}
      //   offset={-70} // nếu có AppBar, dùng offset để tránh che mất section
      //   duration={500}
      //   onClick={() => animateScroll.scrollToBottom()}
    >
      {children}
    </Link>
  );
};
