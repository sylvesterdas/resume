import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/seo';

export const runtime = 'edge';

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 128,
            background: '#1a1a1a',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontFamily: 'sans-serif',
            padding: '0 50px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 80, margin: 0 }}>Latest Articles</p>
          <p style={{ fontSize: 48, margin: 0, opacity: 0.7 }}>{siteConfig.title}</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response('Failed to generate image', { status: 500 });
  }
}