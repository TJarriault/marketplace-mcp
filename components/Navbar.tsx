import Link from "next/link";
import { Bot, PlusCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-slate-900">MCP Marketplace</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
            Marketplace
          </Link>
          <Link href="/submit" className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors">
            <PlusCircle className="w-4 h-4" />
            <span>Submit Agent</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
