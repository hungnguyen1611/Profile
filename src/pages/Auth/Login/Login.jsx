import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.paper",
        px: 3,
      }}
    >
      <Stack spacing={3} alignItems="center" textAlign="center">
        <Typography color="text.secondary" variant="h4" fontWeight={600}>
          Trang đăng nhập đã được gỡ bỏ
        </Typography>
        <Typography color="text.secondary" variant="body1">
          Bạn có thể quay lại trang chủ để tiếp tục xem portfolio.
        </Typography>
        <Button component={Link} to="/" variant="contained">
          Quay lại trang chủ
        </Button>
      </Stack>
    </Box>
  );
}
