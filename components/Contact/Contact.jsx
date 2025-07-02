import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";
import { toast } from "react-toastify";
import { sendInfo_API } from "../../APIS";
import { CustomTextField } from "../CustomTextField/CustomTextField";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Lưu ý cú pháp viết toast cần nhận vào 1 promise chưa xử lí, xử lí thì xuống dưới
    toast
      .promise(sendInfo_API(data), {
        pending: "Sending message...",
        // success: "Message sent successfully!", viết ở dưới hoặc trên này
        error: "Failed to send message",
      })
      .then(() => {
        toast.success("Message sent successfully!");
      });
  };

  return (
    <Element name="contact">
      <Grid
        id={"contact"}
        container
        sx={{ justifyContent: "space-between", mt: 10 }}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography
            data-aos="fade-right"
            sx={{ fontWeight: "bold" }}
            variant="h3"
          >
            Let&apos;s <span className="gradient--text">Talk</span>
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12, md: 8 }}
          sx={{
            mt: { xs: 4, md: 0 },
            overflow: "hidden",
          }}
        >
          <Box data-aos="fade-left" sx={{ display: "flex", gap: 5 }}>
            <Box>
              <Typography variant="h4">Email:</Typography>
              <Box component={"a"} href="mailto:devnguyen@gmail">
                <Typography variant="h6">devnguyen@gmail.com</Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h4">Call</Typography>
              <Typography
                sx={{ wordBreak: "break-word" }}
                component={"a"}
                href="tel:0386905265"
                variant="h6"
              >
                +84386905265
              </Typography>
            </Box>
          </Box>

          <Stack
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-left"
            sx={{ mt: 2, gap: 2 }}
            component={"form"}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <CustomTextField
                  {...register("name", { required: "Name is required" })}
                  label="Name"
                  variant="outlined"
                />
                {errors.name && (
                  <Typography mt={1} color="warning">
                    {errors.name.message}
                  </Typography>
                )}
              </Box>
              <Box>
                <CustomTextField
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Email is invalid",
                    },
                  })}
                  label="Email"
                  variant="outlined"
                />
                {errors.email && (
                  <Typography mt={1} color="warning">
                    {errors.email.message}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box>
              <CustomTextField
                {...register("message", { required: "Message is required" })}
                sx={{
                  alignSelf: "flex-start",
                  "& .MuiInputBase-root": {
                    padding: 0,
                    "& textarea": {
                      padding: 2,
                    },
                  },
                }}
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
              {errors.message && (
                <Typography mt={1} color="warning">
                  {errors.message.message}
                </Typography>
              )}
            </Box>
            <Button
              className="btn-animation_submit"
              type="submit"
              sx={{
                padding: "10px 20px",
                alignSelf: "center",
                overflow: "hidden",
              }}
            ></Button>
          </Stack>
        </Grid>
      </Grid>
    </Element>
  );
}
