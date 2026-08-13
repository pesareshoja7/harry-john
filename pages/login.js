import { useState } from 'react'
import axios from 'axios'
import Router from 'next/router'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  async function submit(e) {
    e.preventDefault()
    try {
      await axios.post('/api/auth', { username, password })
      Router.push('/')
    } catch (err) {
      setError(err.response?.data?.message || err.message)
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>ورود به پنل</h1>
      <form onSubmit={submit} style={{ maxWidth: 360 }}>
        <div>
          <label>نام کاربری</label>
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>رمز عبور</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">ورود</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </main>
  )
}
