import VideoSection from '@/components/VideoSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CAD Exchanger - 3D Visualization & Conversion Solutions',
  description:
    'CAD Exchanger provides solutions for visualization and conversion of 3D data, trusted by industry leaders like Apple, Tesla, Amazon, and NASA.',
};

export default function Home() {
  return (
    <>
      <VideoSection />
      <FeatureSection />
      <TestimonialSection />
    </>
  );
}
