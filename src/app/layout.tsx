import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import { Footer } from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@pheralb/toast";

const quickSand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bienes Raíces - Proyecto Real State",
  description: "Aplicación de propiedades de bienes raíces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="es" suppressHydrationWarning>
        <body className={`${quickSand.className}`}>
          <header>
            <Header />
          </header>
          <main className="min-h-dvh">
            {children}
            <Toaster
              theme="light"
              position="bottom-right"
              toastOptions={{
                animationOnClose: "swipe",
                icons: {
                  error: "❌",
                  info: "ℹ️",
                  warning: "⚠",
                  success: "✅",
                  loading: "⌛",
                },
              }}
            />
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
