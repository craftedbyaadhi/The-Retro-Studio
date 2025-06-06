import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

const ppNeueMontreal = localFont({
    src: '../../public/fonts/ppneuemontreal.otf',
    variable: '--font-montreal',
})

export const metadata: Metadata = {
    title: 'The Rétro Studio - A house of artistry, engineering, and timeless expression',
    description: 'A house of artistry, engineering, and timeless expression',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${ppNeueMontreal.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
