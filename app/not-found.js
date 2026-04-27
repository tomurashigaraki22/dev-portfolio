"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [randomMessage, setRandomMessage] = useState("");
  const [mounted, setMounted] = useState(false);

  const funnyMessages = [
    "This page went to production without proper testing.",
    "Error 404: Coffee not found. Developer needs caffeine to fix this.",
    "Looks like this route got lost in a merge conflict.",
    "This page is still in development... since 2019.",
    "404: Page not found. Have you tried turning it off and on again?",
    "This URL is deprecated. Please update your bookmarks.",
    "Oops! This page escaped to production.",
    "This endpoint returned undefined. Classic JavaScript move."
  ];

  useEffect(() => {
    setMounted(true);
    setRandomMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
  }, []);

  return (
    <div className="not-found-root">
      <div className="not-found-container">
        {/* Funny Icon */}
        <div className="not-found-icon">
          <svg 
            width="120" 
            height="120" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5"
            className="icon"
          >
            {/* Bug Icon from HugeIcons style */}
            <path d="M8 2V5M16 2V5M8 19V22M16 19V22M2 8H5M2 16H5M19 8H22M19 16H22"/>
            <path d="M8 8L16 16M16 8L8 16"/>
            <rect x="6" y="6" width="12" height="12" rx="2"/>
          </svg>
        </div>

        {/* Error Code */}
        <h1 className="error-code">404</h1>
        
        {/* Funny Message */}
        {mounted && (
          <p className="error-message">{randomMessage}</p>
        )}
        
        {/* Description */}
        <p className="error-description">
          The page you're looking for seems to have encountered a runtime exception.
          Don't worry, it happens to the best of us.
        </p>

        {/* Action Buttons */}
        <div className="error-actions">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-ghost"
          >
            Try Again
          </button>
        </div>

        {/* Debug Info */}
        <div className="debug-info">
          <p className="debug-title">Debug Info:</p>
          <div className="debug-details">
            <span>Status: 404</span>
            <span>Error: Page not found</span>
            <span>Stack trace: Check your URL spelling</span>
          </div>
        </div>
      </div>

      <style>{`
        .not-found-root {
          min-height: 100vh;
          background: #111111;
          color: #EAEAEA;
          font-family: 'Geist', 'Inter', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .not-found-container {
          text-align: center;
          max-width: 600px;
          width: 100%;
        }

        .not-found-icon {
          margin-bottom: 32px;
        }

        .icon {
          color: #B89A4A;
          animation: wiggle 2s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        .error-code {
          font-size: clamp(80px, 15vw, 120px);
          font-weight: 300;
          color: #EAEAEA;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .error-message {
          font-size: 18px;
          color: #B89A4A;
          margin-bottom: 16px;
          font-style: italic;
          line-height: 1.4;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .error-description {
          font-size: 16px;
          color: #A0A0A0;
          margin-bottom: 40px;
          line-height: 1.6;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }

        .error-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #B89A4A;
          color: #111111;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 12px 28px;
          border-radius: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }

        .btn-primary:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }

        .btn-ghost {
          background: none;
          border: 1px solid rgba(255,255,255,0.2);
          color: #686868;
          font-size: 14px;
          letter-spacing: 0.04em;
          padding: 11px 27px;
          cursor: pointer;
          transition: color 0.2s ease, border-color 0.2s ease;
          font-family: inherit;
        }

        .btn-ghost:hover {
          color: #EAEAEA;
          border-color: #EAEAEA;
        }

        .debug-info {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 32px;
          text-align: left;
        }

        .debug-title {
          font-size: 12px;
          color: #B89A4A;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .debug-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: #606060;
        }

        .debug-details span {
          padding: 4px 0;
        }

        /* Mobile */
        @media (max-width: 640px) {
          .not-found-root {
            padding: 20px;
          }
          
          .error-actions {
            flex-direction: column;
            gap: 16px;
          }
          
          .btn-primary,
          .btn-ghost {
            width: 100%;
            max-width: 200px;
            text-align: center;
          }
          
          .debug-info {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}