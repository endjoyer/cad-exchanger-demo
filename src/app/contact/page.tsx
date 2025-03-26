import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - CAD Exchanger',
  description:
    'Get in touch with the CAD Exchanger team for inquiries about our 3D visualization and conversion solutions.',
};

export default function ContactPage() {
  return (
    <>
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: '#f8f9fa',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography
              component="h1"
              variant="h3"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Contact Us
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
              Have questions about our products or want to discuss how CAD
              Exchanger can help your business? Fill out the form below and our
              team will get back to you soon.
            </Typography>
          </Box>

          <ContactForm />
        </Container>
      </Box>
    </>
  );
}
