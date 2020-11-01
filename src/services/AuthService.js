import RequestService from "../services/RequestService";
import Config from "../config";

export default class AuthService {
  async logout() {
    const request = new RequestService();
    const response = await request.post(Config.api.url + "/auth/logout");
    if (response) {
      localStorage.clear();
      return true;
    }
    return false;
  }
}
