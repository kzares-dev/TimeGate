import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atemporal',
  description: 'Descubre el pasado y haz historia en nuestro Festival Atemporal. ¡Conviértete en el campeón del conocimiento histórico!',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastContainer
            position="bottom-right"
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
