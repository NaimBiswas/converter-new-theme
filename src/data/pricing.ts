import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Starter',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Perfect for quick, everyday conversions without registration.',
    features: [
      'Up to 10 MB per file',
      '20 conversions per day',
      'All popular image & data formats',
      'Standard processing speed',
      '24-hour file auto-deletion'
    ],
    ctaText: 'Get Started Free'
  },
  {
    id: 'pro',
    name: 'ConvertFlow Pro',
    priceMonthly: 9,
    priceYearly: 7,
    description: 'For professionals and creators needing high volume and fast speed.',
    features: [
      'Up to 2 GB per file',
      'Unlimited daily conversions',
      'Batch conversion (up to 50 files)',
      'Ultra-fast priority processing',
      'OCR document text extraction',
      'API access (1,000 requests/mo)'
    ],
    popular: true,
    ctaText: 'Start 7-Day Free Trial'
  },
  {
    id: 'team',
    name: 'Team & API',
    priceMonthly: 29,
    priceYearly: 24,
    description: 'Designed for engineering teams, agencies, and automation workflows.',
    features: [
      'Unlimited file sizes',
      'Unlimited team members',
      '100,000 API calls per month',
      'Dedicated cloud server conversion',
      'Custom webhook integrations',
      'Priority 24/7 engineering support'
    ],
    ctaText: 'Contact Sales'
  }
];
