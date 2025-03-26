import * as yup from 'yup';

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters')
    .max(50, 'Name should not exceed 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Enter a valid email'),
  company: yup
    .string()
    .required('Company is required')
    .min(2, 'Company should be at least 2 characters')
    .max(100, 'Company should not exceed 100 characters'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message should be at least 10 characters')
    .max(1000, 'Message should not exceed 1000 characters'),
});
