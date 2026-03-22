import { AppProvider } from '../shared/lib/AppProvider';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
