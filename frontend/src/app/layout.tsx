import './globals.css'
import { Inter } from 'next/font/google'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from '../../components/navigation/ResponsiveAppbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pomidorro',
  description: 'Pomidorro app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ResponsiveAppBar />
      {children}</body>
    </html>
  )
}
