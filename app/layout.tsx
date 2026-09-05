import type { Metadata } from "next";
import { Newsreader, Sora } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const sora = Sora({
    variable: "--font-ui",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Captain Jinn",
    description:
        "Captain Jinn is a full-stack developer crafting sharp, modern web products with a distinctive digital privateer identity.",
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("captain-jinn-theme");
    const theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${sora.variable} ${newsreader.variable} antialiased`}>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
                <Header />
                {children}
            </body>
        </html>
    );
}
