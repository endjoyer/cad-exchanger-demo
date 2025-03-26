export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ContactResponseData {
  message: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
