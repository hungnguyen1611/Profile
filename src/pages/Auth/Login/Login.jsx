import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../../../APIS";
import { CustomTextField } from "../../../../components/CustomTextField/CustomTextField";
import loginBackground from "../../../assets/images/loginBackground.png";

export default function Login() {
  const navigate = useNavigate();
  // đã có register quản lí
  // const [checked, setChecked] = useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data.remember) {
      toast.error("Please check remember me");
      return;
    }
    // Lưu ý cú pháp viết toast cần nhận vào 1 promise chưa xử lí, xử lí thì xuống dưới
    toast
      .promise(login(data), {
        pending: "login in...",
        // success: "Message sent successfully!", viết ở dưới hoặc trên này
        error: "Failed login",
      })
      .then((res) => {
        toast.success("Login successfully!");
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        navigate("/");
      });
  };
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          width: {
            xs: "100%",
            sm: "90%",
            md: "80%",
          },
          height: {
            xs: "100%",
            sm: "unset",
            // md: "unset",
          },

          aspectRatio: {
            xs: "auto",
            md: "16/9",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            padding: 2,
            gap: {
              xs: 4,
              md: 10, // khi dung gap phai có spacing dong bo neu ko se bị xuống dòng
            },
          }}
          container
          spacing={10}
        >
          <Grid
            // container có thể thêm để căn giữa ảnh mà ko cần thêm thẻ box
            size={{ xs: 12, md: 6 }}
            justifyContent={"center"}
            alignContent={"center"}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "70%",
                    sm: "50%",
                    md: "100%",
                  },
                  aspectRatio: "1/1",
                }}
                component={"img"}
                src={loginBackground}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography color="text.secondary" variant="h4">
              Well Come Back
            </Typography>
            <Typography color="text.secondary" fontWeight={600} variant="h4">
              Portfolio
            </Typography>

            <Stack
              onSubmit={handleSubmit(onSubmit)}
              component={"form"}
              sx={{ mt: 5, gap: 1 }}
            >
              <Box>
                <CustomTextField
                  fullWidth
                  {...register("email", { required: true })}
                  placeholder="Email"
                />
                {errors.email && (
                  <p style={{ color: "red" }}>Email is required</p>
                )}
              </Box>
              <Box>
                <CustomTextField
                  fullWidth
                  {...register("password", { required: true })}
                  placeholder="Password"
                />
                {errors.password && (
                  <p style={{ color: "red" }}>Password is required</p>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      {...register("remember")}
                      sx={{ "& .MuiSvgIcon-root": { color: "black" } }}
                      // checked={checked}
                      // onChange={handleChange}
                    />
                  }
                  label="Remember me"
                />
                <Typography alignContent={"center"} variant="body2">
                  Forgot Password
                </Typography>
              </Box>

              <Button
                type="submit"
                fullWidth
                className="btn-animation_login"
              ></Button>
            </Stack>

            <Link>
              <Typography
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  "&:hover": { color: "#ff82f3" },
                }}
                variant="body2"
                textAlign={"center"}
              >
                Don&apos;t have an account?
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
