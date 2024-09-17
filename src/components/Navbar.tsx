import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="bg-[#FFD014] p-4">
      <nav className="px-4 md:px-72 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-black">musho</span>
          <span className="text-xs bg-black text-[#FFD014] px-1 rounded">BETA</span>
        </Link>
        <div className="hidden md:flex items-center space-x-10 flex-grow justify-center  text-sm font-bold">
          <Link href="/showcase" className="text-black hover:underline">
            Showcase
          </Link>
          <Link href="/pricing" className="text-black hover:underline">
            Pricing
          </Link>
          <Link href="/blog" className="text-black hover:underline">
            Blog
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="default" className="bg-black text-white font-bold hover:bg-gray-800 rounded-[6px] px-8 py-4">
            Get Plugin
          </Button>
          <Button variant="outline" className="border-black text-black bg-transparent font-bold hover:text-black rounded-[6px] px-6 py-4">
            Sign up
          </Button>
        </div>
        <Button variant="ghost" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </nav>
    </header>
  )
}