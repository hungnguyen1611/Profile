import axios from "axios";
import API_ROOT from "../src/utils/contants";

export const sendInfo_API = async (data) => {
  return axios.post(`${API_ROOT}/v1/profile/send_info`, data);
};
