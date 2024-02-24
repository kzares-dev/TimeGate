import Navbar from "@/components/shared/Navbar"
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-[100vh]">
      <NextTopLoader
        color="#000"
        height={4}      />
      <Navbar />
      <div className="back-gradient" />

      {children}
    </div>
  )
}
