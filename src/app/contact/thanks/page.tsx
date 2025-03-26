'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircularProgress from '@mui/material/CircularProgress';

function ThanksContent() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const nameParam = searchParams.get('name');
    const messageParam = searchParams.get('message');

    setMessage(messageParam || `Thank you for your interest, ${nameParam}.`);
  }, [searchParams]);

  return (
    <Box
      sx={{
        textAlign: 'center',
        p: { xs: 3, md: 5 },
        backgroundColor: '#fff',
        borderRadius: 4,
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
      }}
    >
      <CheckCircleOutlineIcon
        color="success"
        sx={{
          fontSize: { xs: 60, md: 80 },
          mb: 2,
        }}
      />

      <Typography
        component="h1"
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 700,
        }}
      >
        Message Sent!
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 4,
          color: 'text.secondary',
          fontWeight: 'normal',
        }}
      >
        {message}
      </Typography>

      <Button
        component={Link}
        href="/"
        variant="contained"
        size="large"
        sx={{
          px: 4,
          py: 1.5,
          borderRadius: 2,
          textTransform: 'none',
          fontSize: '1rem',
        }}
      >
        Return to Home
      </Button>
    </Box>
  );
}

function LoadingFallback() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default function ThanksPage() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f8f9fa',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Suspense fallback={<LoadingFallback />}>
          <ThanksContent />
        </Suspense>
      </Container>
    </Box>
  );
}
