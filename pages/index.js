import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await axios.get('/api/pasargad')
        setStatus(res.data)
      } catch (e) {
        setStatus({ error: e.message })
      }
    }
    fetchStatus()
  }, [])

  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>پنل پاسارگاد</h1>
      <p><Link href="/login">ورود</Link></p>
      <section style={{ marginTop: 20 }}>
        <h2>وضعیت نود</h2>
        <pre>{JSON.stringify(status, null, 2)}</pre>
      </section>
    </main>
  )
}
