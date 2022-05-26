import axios from "axios";

const serverRegion = {
  eu: "https://api-eu.mixpanel.com",
  us: "https://api.mixpanel.com",
};

axios.defaults.baseURL = serverRegion.us;

export function configureAxios({ region }: { region: "eu" | "us" }) {
  axios.defaults.baseURL = serverRegion[region];
}

export default axios;
