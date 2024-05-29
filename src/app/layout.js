import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inspeção",
  description: "Sistema de inspeção de obras",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel='icon' href="/favicon.ico" />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        <AuthProvider> {children}</AuthProvider>
       </body>
    </html>
  );
}
