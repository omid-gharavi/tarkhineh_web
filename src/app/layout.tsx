import type { Metadata } from "next";
import { vazir_font } from "@/utils/fonts";
import "@/styles/globals.css";
import { Toaster } from 'sonner'
import QueryProvider from "@/providers/query-provider";
import OnlineStatus from "@/providers/online-status";

export const metadata: Metadata = {
  title: "ترخینه",
  verification: {
    google: 'hgpEpGAp-btfBVyTcCbeTxT1ooHJg0m_9EeppTsSZYk'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazir_font.className} antialiased select-none`}
      >
        <QueryProvider>
          <Toaster position="bottom-center" richColors />
          <OnlineStatus>
            {children}
          </OnlineStatus>
        </QueryProvider>
      </body>
    </html>
  );
}