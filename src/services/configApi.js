import axios from "axios";

const url = axios.create({
  baseURL: "https://face.ox-sys.com",
});

export default url;
