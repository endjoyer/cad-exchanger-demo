import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/utils/validation';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const formData = await contactFormSchema.validate(body);

    console.log('Form submission data:', formData);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      {
        message: `Thank you for your interest, ${formData.name}.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);

    return NextResponse.json(
      {
        error: 'Invalid form data',
      },
      { status: 400 }
    );
  }
}
