// pages/api/customEndpoint.js

export default function handler(req, res) {
    const message = 'Bem-vindo à nossa API!';
    res.status(200).json({ message });
  }
  