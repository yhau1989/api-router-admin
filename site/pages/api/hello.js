// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var get_ip = require('ipware')().get_ip;

export default function handler(req, res) {
  const clientIp = get_ip(req); 
  res.status(200).json({ clientIp })
}
