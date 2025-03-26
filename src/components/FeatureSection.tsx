'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import type { FeatureCardProps } from '@/types';

const features: FeatureCardProps[] = [
  {
    title: 'CAD Exchanger SDK',
    description:
      'Powerful toolkit for developers to enable CAD data exchange in their applications with 20+ formats support.',
    icon: <CodeIcon fontSize="large" color="primary" />,
  },
  {
    title: 'CAD Exchanger Cloud',
    description:
      'Cloud-based platform for converting and viewing 3D CAD files online without software installation.',
    icon: <CloudIcon fontSize="large" color="primary" />,
  },
  {
    title: 'CAD Exchanger Lab',
    description:
      'Desktop application for engineers and designers to view, convert and analyze 3D CAD models.',
    icon: <BuildIcon fontSize="large" color="primary" />,
  },
  {
    title: 'Enterprise Solutions',
    description:
      'Customized solutions for large organizations with advanced requirements for 3D data processing.',
    icon: <StorageIcon fontSize="large" color="primary" />,
  },
];

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 3,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        border: '1px solid #eaeaea',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 2 }}>{icon}</Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: 1.5,
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function FeatureSection() {
  return (
    <Box
      component="section"
      id="products"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: '#f8f9fa',
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
            Our Products
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
            Discover our comprehensive suite of 3D data exchange solutions
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
