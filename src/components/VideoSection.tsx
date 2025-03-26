'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import YouTubeEmbed from './YouTubeEmbed';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function VideoSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          direction={isMobile ? 'column-reverse' : 'row'}
        >
          <Grid item xs={12} md={6} component="div">
            <Typography
              component="h1"
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              Visualize and Convert 3D Data with Precision
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.6,
                textAlign: isMobile ? 'center' : 'left',
              }}
            >
              CAD Exchanger provides solutions for visualization and conversion
              of 3D data, trusted by industry leaders like Apple, Tesla, Amazon,
              and NASA.
            </Typography>
            <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
              <Button
                component={Link}
                href="/contact"
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
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: isMobile ? 4 : 0,
            }}
          >
            <YouTubeEmbed
              videoId="dQw4w9WgXcQ"
              title="CAD Exchanger Introduction"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
