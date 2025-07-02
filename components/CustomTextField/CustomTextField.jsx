import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  // "& + .MuiFormControl-root": {
  //   marginLeft: theme.spacing(2),
  // },

  "& input::placeholder": {
    color: "#fff",
    opacity: 1, // Đảm bảo màu không bị mờ (đặc biệt trên Firefox)
  },

  "& input, & textarea": {
    backgroundColor: theme.palette.background.light,
    borderRadius: "8px",
  },

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.text.primary,
    },
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
    "&.Mui-focused": {
      color: theme.palette.text.primary,
    },
  },

  "& .MuiInputBase-input:-internal-autofill-selected": {
    WebkitBoxShadow: "0 0 0 1000px #e0f7fa inset", // Màu nền khi chọn gợi ý
    WebkitTextFillColor: "#000", // Màu chữ
  },
  "& .MuiInputBase-input:-internal-autofill-previewed": {
    WebkitBoxShadow: "0 0 0 1000px #f0f4c3 inset", // Màu nền khi gợi ý được xem trước
    WebkitTextFillColor: "#000", // Màu chữ
    backgroundColor: "#f0f4c3", // Đảm bảo nền đồng nhất
  },
}));
