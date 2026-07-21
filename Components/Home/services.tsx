import {
    Shirt,
    Scissors,
    Sparkles,
    Heart,
    Ruler,
    Star,
} from "lucide-react";

const services = [
    {
        icon: <Shirt size={40} />,
        title: "Designer Blouses",
        desc: "Elegant custom blouse stitching with premium finishing.",
    },
    {
        icon: <Sparkles size={40} />,
        title: "Bridal Collection",
        desc: "Exclusive bridal blouses and wedding outfit stitching.",
    },
    {
        icon: <Scissors size={40} />,
        title: "Alterations",
        desc: "Perfect fitting alterations for every occasion.",
    },
    {
        icon: <Heart size={40} />,
        title: "Custom Designs",
        desc: "Your ideas transformed into beautifully stitched outfits.",
    },
    {
        icon: <Ruler size={40} />,
        title: "Perfect Measurements",
        desc: "Accurate measurements for a flawless fit every time.",
    },
    {
        icon: <Star size={40} />,
        title: "Premium Finishing",
        desc: "Every stitch completed with care and attention to detail.",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="bg-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">

                    <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
                        Our Services
                    </span>

                    <h2 className="mt-4 text-5xl font-bold text-[#222]">
                        Crafted For Every Occasion
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
                        We create elegant outfits that combine comfort,
                        perfect fitting and timeless style.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group rounded-[30px] border border-gray-100 bg-[#FAF8F5] p-8 transition duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:shadow-2xl"
                        >
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6D214F] text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-semibold text-[#222]">
                                {service.title}
                            </h3>

                            <p className="mt-4 leading-8 text-gray-600">
                                {service.desc}
                            </p>

                            <button className="mt-8 text-[#6D214F] font-semibold group-hover:text-[#D4AF37] transition">
                                Learn More →
                            </button>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}