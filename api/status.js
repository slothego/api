// api/status.js
export default function handler(req, res) {
  res.status(200).json({ message: 'OK' }); // Replace 200 with any status code you want
}
