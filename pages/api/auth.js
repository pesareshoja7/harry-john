import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret'

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { username, password } = req.body

  // نمونه: در عمل باید با DB یا سرویس احراز هویت چک شود
  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '8h' })
    res.setHeader('Set-Cookie', serialize('token', token, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 8 * 3600
    }))
    return res.json({ ok: true })
  }
  return res.status(401).json({ message: 'نام کاربری یا رمز عبور اشتباه است' })
}
