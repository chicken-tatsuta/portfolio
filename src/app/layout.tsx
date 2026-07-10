import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "龍田 幹 | ポートフォリオ",
  description:
    "FRC Team 9494 Hanabiでの代表・チーム運営・資金調達・広報・アウトリーチ経験を中心にまとめた、龍田幹のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
