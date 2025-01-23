import Link from "next/link";
import { X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ealtugk
            </p>
            <Link
              href="https://x.com/ealtugk"
              target="_blank"
              className="flex items-center capitalize gap-2 rounded-full bg-neutral-800 px-4 py-2 text-white hover:bg-[#1DB954] hover:text-white transition-all"
              aria-label="Follow on X">
              <span className="text-sm font-medium">Follow my journey</span>
              <X className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-neutral-400 hover:text-[#1DB954] transition-colors text-sm">
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-neutral-400 hover:text-[#1DB954] transition-colors text-sm">
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-neutral-400 hover:text-[#1DB954] transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
