import floatingdock from '@/src/components/ui';
import timeline from '@/src/components/ui';

export const metadata = {
  title: "Portfolio of Aaryan Kumar Tiwari",
  description: "NoticedXAaryan",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Display the Floating Dock */}
        <floatingdock/>

        <timeline/>

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}

