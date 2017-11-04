const { send } = require("micro");
const tunnel = require("tunnel");
const got = require("got");

const ip = '34.240.8.54'

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  const { body } = await got(`${ip}:3000${req.url}`)

  return body
};
