import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "~/components/theme-provider";
import TrpcProvider from "~/app/_trpc/trpcProvider";
import ReduxProvider from "~/app/_store/reduxProvider";
import { AuthProvider } from "./_nextauth/nextAuthProvider";

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
  title: "Demon Lord Companion 👹",
  description: "Various tools for running a Shadow of the Demon Lord session.",
};

export default function RootLayout({ children, session }: { children: React.ReactNode, session: any }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={fontSans.className}>
          <AuthProvider session={session}>
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
        </AuthProvider>
      </body>
    </html>
  );
}
