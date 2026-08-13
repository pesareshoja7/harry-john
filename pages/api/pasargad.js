import axios from 'axios'
import jwt from 'jsonwebtoken'

const NODE_URL = process.env.PASARGAD_NODE_URL
const API_KEY = process.env.PASARGAD_API_KEY

export default async function handler(req, res) {
  // نمونه health check ساده
  try {
    const r = await axios.get(`${NODE_URL}/health`, {
      headers: { 'x-api-key': API_KEY },
      timeout: 5000
    })
    return res.json({ node: r.data })
  } catch (err) {
    return res.status(502).json({ error: 'failed to reach pasargad node', detail: err.message })
  }
}
