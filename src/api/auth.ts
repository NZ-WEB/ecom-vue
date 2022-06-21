import axios from "axios";
const BASE_URL = "https://track-api.leadhit.io/client/test_auth";
const API_KEY = "eEZn8u05G3bzRpdL7RiHCvrYAYo";

export default class Auth {
  getLeadhitSiteId(id: string) {
    return axios.get(BASE_URL, {
      method: "GET",
      headers: {
        "Api-Key": `${id}:${API_KEY}`,
        "Leadhit-Site-Id": id,
      },
    });
  }
}
