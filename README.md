# CAD Exchanger - Frontend Test Assignment

This is a responsive two-page website built as a test assignment for the Frontend Developer position at CAD Exchanger. The project includes a main page, a contact page with a form, and a response page after form submission.

## Features

- Responsive design for all screen sizes
- YouTube video embed with performance optimization
- Contact form with validation
- Server-side form processing
- SEO optimization including Open Graph tags
- Accessibility best practices

## Tech Stack

- **Framework**: Next.js 14 (with App Router)
- **Language**: TypeScript
- **UI Library**: Material UI (MUI)
- **Form Management**: React Hook Form with Yup validation
- **Styling**: Emotion (CSS-in-JS)
- **YouTube Optimization**: lite-youtube-embed

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Styling Approach

The project uses Material UI as the component library with a custom theme. Some key styling decisions:

- Custom theme to match brand colors
- Responsive layouts with MUI Grid system
- Enhanced input fields with custom focus states
- Smooth transitions and hover effects for interactive elements

### CSS Techniques

One cutting-edge CSS technique implemented in this project is the use of CSS Custom Properties in combination with MUI's styling system. This allows for dynamic theme changes while maintaining the type safety of TypeScript. The implementation uses:

- CSS variables for color theming
- CSS Grid for responsive layouts
- Strategic use of `aspect-ratio` for maintaining video proportions

## SEO Optimization

The site implements several SEO best practices:

- Proper heading hierarchy (h1, h2, h3)
- Descriptive meta titles and descriptions
- Open Graph and Twitter card meta tags for better social sharing
- Semantic HTML elements
- Alt text for images
- Performance optimization for Core Web Vitals
- Mobile-friendly responsive design

## Performance Optimization

Special attention was paid to performance optimization:

- YouTube video loading is deferred using lite-youtube-embed
- Images are optimized
- Component-level code splitting
- Minimal CSS through targeted styling
- Next.js image optimization

## Deployment

The site is deployed on Vercel, which provides:

- Global CDN
- Edge functions for the contact form API
- Automatic HTTPS
- Continuous deployment from GitHub

## Project Structure

```bash
npm test
```

## Building for Production

```bash
npm run build
```

Then you can serve the built application:

```bash
npm start
```
