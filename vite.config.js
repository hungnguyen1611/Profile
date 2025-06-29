import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // 👈 Bắt buộc để Vite lắng nghe trên địa chỉ IP nội bộ
    port: 5000, // hoặc port bạn muốn
  },
  plugins: [react()],
});
