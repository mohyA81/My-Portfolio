import { ArrowUp, Mail } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 border-t border-white/10">
      <div className="flex flex-col max-w-6xl gap-6 mx-auto sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <div>
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white"
          >
            Tiara<span className="text-purple-400">.</span>
          </a>

          <p className="mt-2 text-xs text-white/35">
            Software Engineer & Web Developer
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 sm:items-end">
          <a
            href="mailto:mohy.atlookhanloo@gmail.com"
            className="inline-flex items-center gap-2 text-sm transition-colors text-white/50 hover:text-purple-300"
          >
            <Mail size={15} />
            mohy.atlookhanloo@gmail.com
          </a>

          <p className="text-xs text-white/30">
            © {currentYear} Tiara. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0d0b18]/80 text-white/60 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}

export default Footer;