export default function Hero() {
    return (
        <section
            className="relative flex h-screen items-center justify-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2070&auto=format&fit=crop')",
            }}
        >
            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Gold Light */}
            <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-[130px]" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#6D214F]/20 blur-[150px]" />

            {/* Hero Content */}

            <div className="relative z-20 max-w-5xl px-6 text-center text-white">

                {/* Small Badge */}

                <div className="inline-block rounded-full border border-[#D4AF37] px-6 py-2 backdrop-blur-md">

                    <span className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
                        Premium Women's Tailoring
                    </span>

                </div>

                {/* Heading */}

                <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

                    Crafting Elegance

                    <br />

                    <span className="text-[#D4AF37]">
                        One Stitch at a Time
                    </span>

                </h1>

                {/* Description */}

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-200">

                    Every outfit is thoughtfully tailored with precision,
                    passion and attention to detail—bringing your ideas
                    to life with elegance and comfort.

                </p>

                {/* Telugu */}

                <p className="mt-5 text-lg font-medium text-[#F7E59D]">

                    ప్రతి కుట్టులో అందం • ప్రతి డిజైన్‌లో ప్రత్యేకత

                </p>

                {/* Buttons */}

                <div className="mt-12 flex flex-wrap justify-center gap-6">

                    <button className="rounded-full bg-[#6D214F] px-9 py-4 font-semibold transition hover:bg-[#531A3C]">

                        Book Appointment

                    </button>

                    <button className="rounded-full border border-white px-9 py-4 font-semibold backdrop-blur-md transition hover:bg-white hover:text-black">

                        View Gallery

                    </button>

                </div>

            </div>

            {/* Scroll */}

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

                <div className="flex h-12 w-7 justify-center rounded-full border border-white">

                    <div className="mt-2 h-3 w-1 rounded-full bg-white"></div>

                </div>

            </div>

        </section>
    );
}