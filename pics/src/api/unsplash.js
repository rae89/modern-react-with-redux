import axios from "axios";

export default axios.create({
	baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID e725f0e22e7dd9ca6129af47a675b67a8e888ad425aa020fecf4553fa25f1ae6"
  }
});
