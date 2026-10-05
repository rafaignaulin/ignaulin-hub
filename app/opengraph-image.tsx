import { ImageResponse } from 'next/og'

export const alt = 'Rafael Ignaulin — Senior Data Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background: '#0a0a0a',
          color: '#f5f5f5',
        }}
      >
        <div style={{ fontSize: 104, fontWeight: 800, display: 'flex' }}>Rafael Ignaulin</div>
        <div style={{ fontSize: 46, color: '#f59e0b', marginTop: 20 }}>Senior Data Engineer</div>
        <div style={{ fontSize: 30, color: '#a3a3a3', marginTop: 48 }}>ignaulin.com</div>
      </div>
    ),
    size,
  )
}
