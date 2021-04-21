import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      "Client-ID XZQ97qpioqLVIa6hB5GGnV1X0F0TUEJkcqIjNx3262E",
  }
});