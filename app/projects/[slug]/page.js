import Link from 'next/link';

// Project data - in a real app, this might come from a CMS or database
const projects = {
  'watchup-v2': {
    name: 'WatchUp V2',
    description: 'Real-time error tracking & API monitoring platform',
    longDescription: 'A comprehensive monitoring platform built as a Sentry alternative, featuring real-time error tracking, API monitoring, and performance analytics. Built with modern technologies for scalability and reliability.',
    tech: ['Node.js', 'React', 'WebSocket'],
    url: 'https://v2.watchup.site',
  },
  'verso': {
    name: 'Verso',
    description: 'Anonymous poetry platform with 12k+ published poems',
    longDescription: 'A minimalist sanctuary for creative expression where writers can publish poetry anonymously or under their name. Features a clean, distraction-free interface and has grown to over 12,000 published poems.',
    tech: ['Next.js', 'MongoDB', 'Tailwind'],
    url: 'https://verso.watchup.site',
  },
  'worldstreetgold': {
    name: 'WorldStreetGold',
    description: 'Advanced trading platform with multi-chain blockchain integration',
    longDescription: 'A sophisticated trading platform that integrates with multiple blockchain networks including Solana, Ethereum, and Arbitrum. Features real-time market data, advanced trading tools, and seamless multi-chain asset management.',
    tech: ['Hyperliquid', 'Node.js', 'Flask', 'Next.js', 'Solana', 'Ethereum', 'Arbitrum'],
    url: 'https://worldstreetgold.com',
  },
  'creative-learning-system': {
    name: 'Creative Learning System',
    description: 'Comprehensive school management system with testing and educational tools',
    longDescription: 'A complete educational platform designed for modern schools, featuring comprehensive testing systems, interactive drills, student management, and advanced analytics. Built to enhance the learning experience for both students and educators.',
    tech: ['Flask', 'Node.js', 'PostgreSQL'],
  },
  'keyperion-softphone': {
    name: 'Keyperion Softphone',
    description: 'Private company communication platform with secure calls and messaging',
    longDescription: 'A secure communication platform designed for enterprise use, enabling private calls, messaging, and collaboration within organizations. Features end-to-end encryption and real-time communication capabilities.',
    tech: ['WebSocket', 'React Native', 'Node.js', 'Flask'],
  },
  'trollz-app': {
    name: 'Trollz App',
    description: 'E-commerce platform for the Nigerian market',
    longDescription: 'A comprehensive e-commerce solution tailored for the Nigerian market, featuring seamless shopping experiences, local payment integration, and optimized logistics for African commerce.',
    tech: ['React Native', 'Node.js', 'Flask'],
  },
  'watchup-server-agent': {
    name: 'WatchUp Server Agent',
    description: 'Lightweight server monitoring agent built with Go',
    longDescription: 'A high-performance server monitoring agent written in Go, designed to track system health, performance metrics, and report status to the WatchUp monitoring platform with minimal resource overhead.',
    tech: ['Go', 'System Monitoring', 'API'],
  },
  'drop-rideshare': {
    name: 'Drop Rideshare v1',
    description: 'Mobile rideshare application with real-time location tracking',
    longDescription: 'A full-featured rideshare application connecting drivers and passengers with real-time GPS tracking, route optimization, and secure payment processing. Built for the African mobility market.',
    tech: ['React Native', 'Node.js', 'Flask'],
  },
  'blockcred': {
    name: 'BlockCred',
    description: 'Decentralized credential verification on Sui blockchain',
    longDescription: 'A blockchain-based system for verifying academic and professional credentials. Built on the Sui blockchain to ensure immutable, verifiable records that can be trusted by institutions worldwide.',
    tech: ['Sui', 'React', 'Web3'],
  },
  'ripplebids': {
    name: 'Ripplebids',
    description: 'Crypto-enabled bidding and marketplace system',
    longDescription: 'A modern marketplace platform that enables crypto-based bidding for both digital and physical assets. Features real-time bidding, secure transactions, and a user-friendly interface.',
    tech: ['React Native', 'Blockchain', 'API'],
    url: 'https://ripplebids.com',
  },
};

export async function generateMetadata({ params }) {
  const project = projects[params.slug];
  
  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.name} | Tomiwa Raphael`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Tomiwa Raphael`,
      description: project.description,
      images: [`/projects/${params.slug}/opengraph-image`],
    },
    twitter: {
      title: `${project.name} | Tomiwa Raphael`,
      description: project.description,
      images: [`/projects/${params.slug}/opengraph-image`],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = projects[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The requested project could not be found.</p>
          <Link href="/" className="text-yellow-600 hover:text-yellow-500">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Navigation */}
        <nav className="mb-16">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Portfolio
          </Link>
        </nav>

        {/* Project Header */}
        <div className="mb-16">
          <div className="mb-6">
            <span className="text-yellow-600 text-sm uppercase tracking-wider">Project</span>
          </div>
          <h1 className="text-5xl font-light mb-6">{project.name}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h2 className="text-lg font-medium mb-6 text-gray-300">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-xs uppercase tracking-wide text-gray-500 border border-gray-800 px-3 py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-16">
          <h2 className="text-lg font-medium mb-6 text-gray-300">About This Project</h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </div>

        {/* Links */}
        {project.url && (
          <div className="mb-16">
            <h2 className="text-lg font-medium mb-6 text-gray-300">Links</h2>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 hover:text-yellow-500 transition-colors"
            >
              Visit Project →
            </a>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-gray-800 pt-16">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Built by</p>
              <p className="text-white">Tomiwa Raphael</p>
            </div>
            <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">
              View All Projects →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}