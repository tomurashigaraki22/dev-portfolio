import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '404 - Page Not Found | Tomiwa Raphael';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111111',
          color: '#EAEAEA',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Grid */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.02,
            backgroundImage: `
              linear-gradient(#B89A4A 1px, transparent 1px),
              linear-gradient(90deg, #B89A4A 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '800px',
            padding: '60px',
          }}
        >
          {/* Bug Icon */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#B89A4A"
            strokeWidth="1.5"
            style={{ marginBottom: '32px' }}
          >
            <path d="M8 2V5M16 2V5M8 19V22M16 19V22M2 8H5M2 16H5M19 8H22M19 16H22"/>
            <path d="M8 8L16 16M16 8L8 16"/>
            <rect x="6" y="6" width="12" height="12" rx="2"/>
          </svg>

          {/* Error Code */}
          <div
            style={{
              fontSize: '120px',
              fontWeight: 300,
              color: '#EAEAEA',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            404
          </div>

          {/* Message */}
          <div
            style={{
              fontSize: '24px',
              color: '#B89A4A',
              fontStyle: 'italic',
              marginBottom: '16px',
              lineHeight: 1.3,
            }}
          >
            This page escaped to production.
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '18px',
              color: '#A0A0A0',
              lineHeight: 1.4,
            }}
          >
            The page you're looking for encountered a runtime exception.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}