import { Inter, Quicksand, Lora, Playfair, EB_Garamond } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ThemeContextProvider from './context/ThemeContext'
import ThemeSwitch from './components/ThemeSwitch'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'JAV Contractors',
  description: 'Your HVAC Experts',
}

const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand',
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora'
})

const playfair = Playfair({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eb_garamond'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${quicksand.variable} ${lora.variable} ${playfair.variable} ${eb_garamond.variable}`}>
      <body className='font-inter bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90'>
        <ThemeContextProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
