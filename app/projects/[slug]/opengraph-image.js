import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Project | Tomiwa Raphael';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Project data - in a real app, this might come from a CMS or database
const projects = {
  'watchup-v2': {
    name: 'WatchUp V2',
    description: 'Real-time error tracking & API monitoring platform',
    tech: ['Node.js', 'React', 'WebSocket'],
  },
  'verso': {
    name: 'Verso',
    description: 'Anonymous poetry platform with 12k+ published poems',
    tech: ['Next.js', 'MongoDB', 'Tailwind'],
  },
  'blockcred': {
    name: 'BlockCred',
    description: 'Decentralized credential verification on Sui blockchain',
    tech: ['Sui', 'React', 'Web3'],
  },
  'ripplebids': {
    name: 'Ripplebids',
    description: 'Crypto-enabled bidding and marketplace system',
    tech: ['React Native', 'Blockchain', 'API'],
  },
};

export default async function Image({ params }) {
  const project = projects[params.slug];
  
  // Fallback for unknown projects
  const projectName = project?.name || 'Project';
  const projectDescription = project?.description || 'A project by Tomiwa Raphael';
  const projectTech = project?.tech || [];

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
            opacity: 0.02,
            backgroundImage: `
              linear-gradient(45deg, #B89A4A 1px, transparent 1px),
              linear-gradient(-45deg, #B89A4A 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
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
          {/* Project Label */}
          <div
            style={{
              fontSize: '14px',
              letterSpacing: '0.16em',
              color: '#B89A4A',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontWeight: 500,
            }}
          >
            Project
          </div>

          {/* Project Name */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#EAEAEA',
              marginBottom: '24px',
            }}
          >
            {projectName}
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: '22px',
              color: '#A0A0A0',
              lineHeight: 1.4,
              maxWidth: '700px',
              marginBottom: '32px',
            }}
          >
            {projectDescription}
          </div>

          {/* Tech Stack */}
          {projectTech.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
                marginBottom: '24px',
              }}
            >
              {projectTech.map((tech, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.08em',
                    color: '#606060',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '6px 12px',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {tech}
                </div>
              ))}
            </div>
          )}

          {/* Author */}
          <div
            style={{
              fontSize: '16px',
              color: '#686868',
              letterSpacing: '0.04em',
            }}
          >
            by Tomiwa Raphael
          </div>
        </div>

        {/* Side Accent */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '20%',
            bottom: '20%',
            width: '3px',
            background: 'linear-gradient(180deg, transparent, #B89A4A, transparent)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}