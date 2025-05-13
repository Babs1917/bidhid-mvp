// Force redeploy
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'BidHid | The Global Payroll Marketplace',
  description: 'Connect with trusted providers for payroll, EOR, and contractor payments.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
