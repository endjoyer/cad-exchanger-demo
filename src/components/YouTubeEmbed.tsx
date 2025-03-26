'use client';

import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('lite-youtube-embed').then(() => {
      if (containerRef.current) {
        const liteYtElem = document.createElement('lite-youtube');
        liteYtElem.setAttribute('videoid', videoId);
        liteYtElem.setAttribute('title', title);
        liteYtElem.setAttribute('loading', 'lazy');
        liteYtElem.setAttribute('playlabel', 'Play');

        if (containerRef.current.firstChild) {
          containerRef.current.innerHTML = '';
        }
        containerRef.current.appendChild(liteYtElem);
      }
    });
  }, [videoId, title]);

  return (
    <Box
      ref={containerRef}
      sx={{
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Loading video...
      </Box>
    </Box>
  );
}
