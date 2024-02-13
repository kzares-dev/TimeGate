import Navbar from "@/components/shared/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-[100vh] main">
      <Navbar />
      <div className="gradient" />

      {children}
    </div>
  )
}
