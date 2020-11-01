import axios from "axios";

export default class RequestService {
  async get(url, payload, header = null) {
    const data = await this.sendRequest("get", url, header, payload);

    return data;
  }

  setAuthorizationToken(token) {
    axios.defaults.headers.common["Authorization"] = token;
  }

  async post(url, payload, header = null) {
    const data = await this.sendRequest("post", url, header, payload);

    return data;
  }

  async put(url, payload, header = null) {
    const data = await this.sendRequest("put", url, header, payload);

    return data;
  }

  async delete(url, payload, header = null) {
    const data = await this.sendRequest("delete", url, header, payload);

    return data;
  }

  async sendRequest(method, url, header = null, data = null) {
    try {
      const response = await axios({
        method,
        url,
        header: header,
        data: data,
      });

      return {
        code: response.status,
        ...response.data,
      };
    } catch (error) {
      // Logout user if Token is invalid
      if (
        error.response.status === 401 &&
        error.response.data.message === "Unauthenticated."
      ) {
        localStorage.clear();
        this.$router.push({ name: "Home" });
      }

      const errors = error.response.data.errors;
      if (errors) {
        for (let errorMessage in errors) {
          var message = errors[errorMessage][0];
        }
      }

      return {
        code: error.response.status,
        status: error.response.data.status,
        message: errors ? message : error.response.data.message,
      };
    }
  }
}
