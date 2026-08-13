import axios from 'axios'

const NODE_URL = process.env.PASARGAD_NODE_URL
const API_KEY = process.env.PASARGAD_API_KEY

export async function callNode(path, method = 'get', data = null) {
  const url = `${NODE_URL}${path}`
  const opts = {
    method,
    url,
    headers: { 'x-api-key': API_KEY },
    data,
    timeout: 10000
  }
  const res = await axios(opts)
  return res.data
}
