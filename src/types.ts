export type ToolCategory = 'all' | 'data' | 'spreadsheet' | 'images' | 'pdf' | 'devtools' | 'documents' | 'code' | 'text';

export interface ConversionTool {
  id: string;
  title: string;
  description: string;
  fromFormat: string;
  toFormat: string;
  category: ToolCategory;
  fromBgClass: string;
  fromTextColorClass: string;
  toBgClass: string;
  toTextColorClass: string;
  iconFrom: string;
  iconTo: string;
  popular?: boolean;
}

export interface UploadedFileItem {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  extension: string;
  previewUrl?: string;
  targetFormat: string;
  availableFormats: string[];
  status: 'idle' | 'converting' | 'completed' | 'error';
  progress: number;
  conversionStartTime?: number;
  convertedBlob?: Blob;
  convertedUrl?: string;
  convertedSize?: number;
  convertedName?: string;
  convertedContentText?: string;
  errorMessage?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}
