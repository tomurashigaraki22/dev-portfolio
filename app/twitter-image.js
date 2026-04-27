import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Tomiwa Raphael - Fullstack Engineer';
export const size = {
  width: 1200,
  height: 600,
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
        {/* Corner Accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '200px',
            height: '200px',
            background: 'linear-gradient(135deg, #B89A4A, transparent)',
            opacity: 0.1,
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
            padding: '50px',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '16px',
              letterSpacing: '0.12em',
              color: '#B89A4A',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontWeight: 500,
            }}
          >
            Fullstack Engineer
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#EAEAEA',
              marginBottom: '20px',
            }}
          >
            Tomiwa Raphael
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '20px',
              color: '#A0A0A0',
              lineHeight: 1.4,
              maxWidth: '500px',
            }}
          >
            Building production systems that scale across web, mobile, and blockchain.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}