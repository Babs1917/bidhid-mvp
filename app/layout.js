import './globals.css';

export const metadata = {
  title: 'BidHid | The Global Payroll Marketplace',
  description: 'Connect with trusted providers for payroll, EOR, and contractor payments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
