import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import TrpcProvider from "~/app/_trpc/trpcProvider";
import ReduxProvider from "~/app/_store/reduxProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  preload: true,
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HipsterTools 🍈",
  description: "Narzędzia dla graczy od Mistrza Gry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={fontSans.className}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TrpcProvider>
              {children}
            </TrpcProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
