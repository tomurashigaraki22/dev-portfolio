import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Tomiwa Raphael - Fullstack Engineer & Blockchain Developer';
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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111111',
          color: '#EAEAEA',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage: `
              linear-gradient(45deg, #B89A4A 1px, transparent 1px),
              linear-gradient(-45deg, #B89A4A 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '900px',
            padding: '60px',
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: '18px',
              letterSpacing: '0.14em',
              color: '#B89A4A',
              textTransform: 'uppercase',
              marginBottom: '24px',
              fontWeight: 500,
            }}
          >
            Fullstack Engineer • Blockchain Developer
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#EAEAEA',
              marginBottom: '24px',
            }}
          >
            Tomiwa Raphael
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '24px',
              color: '#A0A0A0',
              lineHeight: 1.4,
              maxWidth: '600px',
              marginBottom: '32px',
            }}
          >
            Building production systems that scale. Web, mobile, and blockchain infrastructure.
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: '16px',
              color: '#B89A4A',
              letterSpacing: '0.08em',
            }}
          >
            devtomiwa.watchup.site
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #B89A4A, transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}