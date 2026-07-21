import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="bg-[#FAF8F5] py-24"
        >
            <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

                {/* Left Image */}

                <div className="relative">

                    <div className="absolute -left-5 -top-5 h-full w-full rounded-[35px] border-2 border-[#D4AF37]" />

                    <Image
                        src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&q=80"
                        alt="About Rama Tailoring"
                        width={700}
                        height={900}
                        className="relative rounded-[35px] object-cover shadow-2xl"
                    />

                </div>

                {/* Right */}

                <div>

                    <p className="mb-4 font-semibold uppercase tracking-[4px] text-[#D4AF37]">
                        About Rama
                    </p>

                    <h2 className="text-5xl font-bold leading-tight text-[#222]">
                        Every Stitch
                        <br />
                        Tells a Story.
                    </h2>

                    <p className="mt-8 text-lg leading-9 text-gray-600">
                        At Rama Tailoring, every outfit is stitched with care,
                        precision, and attention to detail. We believe every
                        woman deserves clothing that fits beautifully and
                        reflects her unique style.
                    </p>

                    <p className="mt-6 text-lg leading-9 text-gray-600">
                        From elegant blouses and bridal wear to everyday
                        tailoring, each piece is handcrafted with passion
                        to ensure comfort, confidence, and lasting quality.
                    </p>

                    <div className="mt-10 grid grid-cols-2 gap-6">

                        <div className="rounded-3xl bg-white p-6 shadow-lg">
                            <h3 className="text-4xl font-bold text-[#6D214F]">
                                15+
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Years Experience
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-6 shadow-lg">
                            <h3 className="text-4xl font-bold text-[#6D214F]">
                                500+
                            </h3>

                            <p className="mt-2 text-gray-600">
                                Happy Customers
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}