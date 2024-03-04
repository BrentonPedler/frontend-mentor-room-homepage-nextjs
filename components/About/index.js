import Image from "next/image";
import AboutDark from "../../public/image-about-dark.jpg";
import AboutLight from "../../public/image-about-light.jpg"

const About = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-12 min-h-[760px] md:min-h-[260px]">
			<div className="lg:col-span-4 md:col-span-3 relative w-full h-full">
				<Image
					src={AboutDark}
					alt="Chair and Table in a dim lit room"
					fill={true}
					className="col-span-1"
				/>
			</div>
			<div className="lg:col-span-4 md:col-span-6 flex flex-col justify-center mx-[20px] md:mx-[40px]">
				<h2 className="pb-2">About Our Furniture</h2>
				<p>
					Our multifunctional collection blends design and function to suit your individual taste.
					Make each room unique, or pick a cohesive theme that best express your interests and what
					inspires you. Find the furniture pieces you need, from traditional to contemporary styles
					or anything in between. Product specialists are available to help you create your dream space.
				</p>
			</div>
			<div className="lg:col-span-4 md:col-span-3 relative w-full h-full">
				<Image
					src={AboutLight}
					alt="White Chair in bright room"
					fill={true}
				/>
			</div>
		</div>
	)
}

export default About;
