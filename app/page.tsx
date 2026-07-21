import Navbar from "@/Components/layout/navbar";
import Hero from "@/Components/Home/hero";
import About from "@/Components/Home/about";
import Services from "@/Components/Home/services";
import Gallery from "@/Components/Home/gallery";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <About/>
      <Services/>
      <Gallery />
    </main>
  );
}
