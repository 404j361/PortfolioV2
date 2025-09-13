import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Captain Jinn",
    description:
        "Ahoy! Welcome aboard Captain Jinn's portfolio—set sail through code, creativity, and treasures of the digital seas.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#998d68] bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')] bg-repeat bg-blend-multiply`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
