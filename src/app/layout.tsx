import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "~/app/_lib/_shadcn/theme-provider";
import TrpcProvider from "~/app/_lib/_trpc/trpcProvider";
import StoreProvider from "~/app/_store/storeProvider";
import { AuthProvider } from "./_lib/_nextauth/nextAuthProvider";

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
  title: "Demon Lord Companion",
  description: "Various tools for running a Shadow of the Demon Lord session.",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
	<html lang="pl" suppressHydrationWarning>
	  <body className={fontSans.className}>
		<AuthProvider session={session}>
		  <StoreProvider>
			<ThemeProvider
			  attribute="class"
			  defaultTheme="system"
			  enableSystem
			  disableTransitionOnChange
			>
			  <TrpcProvider>{children}</TrpcProvider>
			</ThemeProvider>
		  </StoreProvider>
		</AuthProvider>
	  </body>
	</html>
  );
}
