'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const footerSections = [
  {
    title: 'Products',
    links: [
      { name: 'CAD Exchanger SDK', href: '#' },
      { name: 'CAD Exchanger Cloud', href: '#' },
      { name: 'CAD Exchanger Lab', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'For Engineers', href: '#' },
      { name: 'For Developers', href: '#' },
      { name: 'For Enterprises', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Tutorials', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact us', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              CAD EXCHANGER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Visualization and conversion solutions for 3D data used by
              industry leaders worldwide.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              © {new Date().getFullYear()} CAD Exchanger. All rights reserved.
            </Typography>
          </Grid>

          {footerSections.map((section) => (
            <Grid item xs={6} sm={3} md={2} key={section.title}>
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
              <Stack spacing={1}>
                {section.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.name}
                    underline="hover"
                    color="text.secondary"
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
