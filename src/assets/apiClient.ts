import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "047053543cca485186c77f1d17bb93b7",
  },
});
