export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full transition-all duration-300">
            <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl">
                {/* Logo */}
                <div>
                    <h1 className="text-3xl font-bold text-white">
                        Rama
                        <span className="text-[#D4AF37]"> Tailoring</span>
                    </h1>
                </div>

                {/* Navigation */}
                <ul className="hidden gap-8 text-white font-medium lg:flex">                    <li className="cursor-pointer hover:text-[#6D214F] transition">
                    Home
                </li>

                    <li className="cursor-pointer hover:text-[#6D214F] transition">
                        About
                    </li>

                    <li className="cursor-pointer hover:text-[#6D214F] transition">
                        Services
                    </li>

                    <li className="cursor-pointer hover:text-[#6D214F] transition">
                        Gallery
                    </li>

                    <li className="cursor-pointer hover:text-[#6D214F] transition">
                        Contact
                    </li>
                </ul>

                {/* CTA */}
                <button className="rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:scale-105">
                    Book Now
                </button>
            </nav>
        </header>
    );
}
