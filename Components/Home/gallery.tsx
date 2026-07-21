import Image from "next/image";

const galleryImages = [
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
    "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800",
];

export default function Gallery() {
    return (
        <section
            id="gallery"
            className="bg-[#FAF8F5] py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <p className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
                        Our Gallery
                    </p>

                    <h2 className="mt-4 text-5xl font-bold text-[#222]">
                        Beautiful Creations
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
                        Every design reflects precision, elegance and handcrafted perfection.
                    </p>

                </div>

                {/* Gallery */}

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">

                    {galleryImages.map((image, index) => (

                        <div
                            key={index}
                            className="relative mb-6 overflow-hidden rounded-[28px] group"
                        >

                            <Image
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                width={700}
                                height={900}
                                className="w-full rounded-[28px] transition duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/40" />

                            <div className="absolute bottom-0 left-0 translate-y-20 p-6 text-white transition duration-500 group-hover:translate-y-0">

                                <h3 className="text-2xl font-bold">
                                    Premium Design
                                </h3>

                                <p className="mt-2 text-sm">
                                    Handcrafted with perfection
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}