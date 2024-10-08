import type { Metadata } from "next";
import "./globals.css";
import { Inter, Roboto_Mono, Bebas_Neue} from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas_neue',
  display: 'swap',
  weight: '400'
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto_mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Crud",
  description: "Generated by Arthur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${roboto_mono.variable} ${bebasNeue.variable} bg-gray-900 text-white h-full w-full`}
      >
        {children}
      </body>
    </html>
  );
}
