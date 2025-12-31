// Example payload structure for the contact form email template
// This demonstrates how to populate the Handlebars template variables

export interface ContactFormLead {
  name: string;
  email?: string;
  phone?: string;
  phone_plain?: string; // For tel: links (no formatting)
  projectType: string; // Maps to service selection
  property?: string; // Maps to address field
  city?: string;
  company?: string;
  timeline?: string;
  message?: string;
}

export interface ContactEmailPayload {
  subject: string;
  preheader: string;
  company_name: string;
  logo_url?: string;
  city_state: string;
  brand_accent: string;
  cta_dark_bg: string;
  bg_color: string;
  text_dark: string;
  text_muted: string;
  text_body: string;
  text_faint: string;
  border_color: string;
  card_header_bg: string;
  card_header_text: string;
  header_text_color: string;
  footer_text_color: string;
  hero_title: string;
  hero_subtitle: string;
  details_title: string;
  call_cta_label: string;
  call_phone: string;
  call_phone_plain: string;
  site_cta_label: string;
  site_url: string;
  footer_note: string;
  submitted_date: string;
  lead: ContactFormLead;
}

// Example payload based on the contact form in contact-section.tsx
export const exampleContactEmailPayload: ContactEmailPayload = {
  "subject": "New Window Replacement Inquiry - Home Window Replacement Service of Arlington",
  "preheader": "Thanks for your inquiry, we have received your window replacement request and will contact you within one business day.",
  "company_name": "Home Window Replacement Service of Arlington",
  "logo_url": "https://homewindowreplacementarlington.com/logo.png",
  "city_state": "Arlington, TX",
  "brand_accent": "#b8956c",
  "cta_dark_bg": "#1a2332",
  "bg_color": "#f8f7f5",
  "text_dark": "#1a2332",
  "text_muted": "#6b6860",
  "text_body": "#4a4842",
  "text_faint": "#9e9a94",
  "border_color": "#e2e0dc",
  "card_header_bg": "#f0efed",
  "card_header_text": "#1a2332",
  "header_text_color": "#ffffff",
  "footer_text_color": "#ffffff",
  "hero_title": "Thanks for your inquiry. We received your window replacement request.",
  "hero_subtitle": "Our Arlington team will review your details and reach out within one business day to discuss your window replacement project.",
  "details_title": "Your project details",
  "call_cta_label": "Call Now",
  "call_phone": "817-592-8870",
  "call_phone_plain": "8175928870",
  "site_cta_label": "Visit Our Site",
  "site_url": "https://homewindowreplacementarlington.com",
  "footer_note": "This confirmation is a transactional email related to your window replacement inquiry.",
  "submitted_date": new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  "lead": {
    "name": "John Smith",
    "email": "john.smith@example.com",
    "phone": "(214) 555-0123",
    "phone_plain": "2145550123",
    "projectType": "Double Hung Windows",
    "property": "123 Main Street, Arlington, TX 76011",
    "city": "Arlington",
    "timeline": "Within 3 months",
    "message": "Hi, I'm looking to replace all the windows in my 3-bedroom home. I'd like to schedule a free consultation to discuss options and get an estimate."
  }
};

// Function to transform contact form data to email payload
export function transformContactFormToEmailPayload(formData: {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  description: string;
}): ContactEmailPayload {
  // Clean phone number for tel: links
  const phonePlain = formData.phone.replace(/\D/g, '');

  return {
    "subject": `New Window Replacement Inquiry - ${formData.name}`,
    "preheader": `Thanks for your inquiry, we have received your window replacement request and will contact you within one business day.`,
    "company_name": "Home Window Replacement Service of Arlington",
    "logo_url": "https://homewindowreplacementarlington.com/logo.png",
    "city_state": "Arlington, TX",
    "brand_accent": "#b8956c",
    "cta_dark_bg": "#1a2332",
    "bg_color": "#f8f7f5",
    "text_dark": "#1a2332",
    "text_muted": "#6b6860",
    "text_body": "#4a4842",
    "text_faint": "#9e9a94",
    "border_color": "#e2e0dc",
    "card_header_bg": "#f0efed",
    "card_header_text": "#1a2332",
    "header_text_color": "#ffffff",
    "footer_text_color": "#ffffff",
    "hero_title": "Thanks for your inquiry. We received your window replacement request.",
    "hero_subtitle": "Our Arlington team will review your details and reach out within one business day to discuss your window replacement project.",
    "details_title": "Your project details",
    "call_cta_label": "Call Now",
    "call_phone": "817-592-8870",
    "call_phone_plain": "8175928870",
    "site_cta_label": "Visit Our Site",
    "site_url": "https://homewindowreplacementarlington.com",
  "footer_note": "This confirmation is a transactional email related to your window replacement inquiry.",
    "submitted_date": new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    "lead": {
      "name": formData.name,
      "email": formData.email,
      "phone": formData.phone,
      "phone_plain": phonePlain,
      "projectType": formData.service,
      "property": formData.address,
      "message": formData.description
    }
  };
}

// Usage example:
/*
import { transformContactFormToEmailPayload } from '@/templates/email-payload-example';

// In your API route handler:
const emailPayload = transformContactFormToEmailPayload({
  name: "Jane Doe",
  phone: "(817) 555-9876",
  email: "jane.doe@email.com",
  service: "Casement Windows",
  address: "456 Oak Street, Arlington, TX 76012",
  description: "Need estimate for 5 casement windows"
});

// Then use emailPayload with your email service (SendGrid, Mailgun, etc.)
// and render the HTML template with the payload data
*/