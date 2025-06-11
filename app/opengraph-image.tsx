import React from 'react';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom right, #8B5CF6, #EC4899)',
          color: 'white',
          fontFamily: 'sans-serif',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px 60px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            width: '80%',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
            }}
          >
            Emotevation
          </h1>
          <p
            style={{
              fontSize: '32px',
              margin: '0 0 40px 0',
              opacity: 0.9,
            }}
          >
            Personalized Daily Motivation
          </p>
          <div
            style={{
              fontSize: '24px',
              opacity: 0.8,
              maxWidth: '600px',
              textAlign: 'center',
            }}
          >
            Get your personalized motivational quotes generated uniquely for you based on your name and date
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
