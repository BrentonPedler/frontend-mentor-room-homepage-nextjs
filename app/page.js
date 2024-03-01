import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import About from "@/components/About";

export default function Home() {
	return (
		<>
			<main className="max-w-[1440px] mx-auto relative">
				<Slider />
				<About />
			</main>
			<div className="absolute z-50 top-14 left-14">
				<Navbar />
			</div>
		</>
	);
}
