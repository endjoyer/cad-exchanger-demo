'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Button from '@mui/material/Button';
import Link from 'next/link';

const testimonials = [
  {
    quote:
      'CAD Exchanger has revolutionized how we handle 3D models across our engineering teams.',
    author: 'John Smith',
    role: 'Engineering Lead at TechCorp',
  },
  {
    quote:
      "The accuracy and speed of format conversion is unmatched. It's become an essential tool in our workflow.",
    author: 'Sarah Johnson',
    role: 'CTO at DesignHub',
  },
  {
    quote:
      "We've reduced our design iteration time by 40% since implementing CAD Exchanger.",
    author: 'Michael Wong',
    role: 'Product Designer at InnovateX',
  },
];

export default function TestimonialSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="h2"
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          >
            Trusted by Industry Leaders
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.1rem',
            }}
          >
            See what our customers have to say about CAD Exchanger solutions
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid #eaeaea',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <FormatQuoteIcon
                    fontSize="large"
                    color="primary"
                    sx={{ mb: 2, transform: 'scaleX(-1)' }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontStyle: 'italic',
                    }}
                  >
                    {testimonial.quote}
                  </Typography>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        width: 40,
                        height: 40,
                        mr: 2,
                      }}
                    >
                      {testimonial.author.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
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
            Contact Us Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
