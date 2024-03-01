'use client'

import Image from "next/image";
import { useState } from 'react';
import IconLeft from "../../public/icon-angle-left.svg";
import IconRight from "../../public/icon-angle-right.svg";
import IconArrow from "../../public/icon-arrow.svg";

const slides = [
	{
		id: 1,
		desktopImage: "/desktop-image-hero-1.jpg",
		mobileImage: "/mobile-image-hero-1.jpg",
		title: "Discover innovative ways to decorate",
		description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
	},
	{
		id: 2,
		desktopImage: "/desktop-image-hero-2.jpg",
		mobileImage: "/mobile-image-hero-2.jpg",
		title: "We are available all across the globe",
		description: "With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today."
	},
	{
		id: 3,
		desktopImage: "/desktop-image-hero-3.jpg",
		mobileImage: "/mobile-image-hero-3.jpg",
		title: "Manufactured with the best materials",
		description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
	}
]

const Slider = () => {
	const [ currentSlide, setCurrentSlide ] = useState( 0 );
	const { desktopImage, mobileImage, title, description } = slides[currentSlide];

	const nextSlide = () => {
		setCurrentSlide( ( prev ) => ( prev + 1 ) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide( ( prev ) => ( prev - 1 + slides.length ) % slides.length);
	};

	return (
		<div className="grid grid-cols-6 md:grid-cols-12 grid-rows-6 h-[750px] md:h-[525px]">
			<div className="md:col-start-1 md:col-end-8 col-span-full row-start-1 row-end-4 md:row-span-full relative">
				<Image
					src={desktopImage}
					alt="Slide Image Desktop"
					fill={true}
					className="xs:block hidden"
				/>
				<Image
					src={mobileImage}
					alt="Slide Image Mobile"
					fill={true}
					className="xs:hidden block"
				/>
			</div>
			<div className="md:col-start-8 md:col-end-13 col-span-full row-start-5 row-end-7 md:row-start-2 md:row-end-5 xl:px-[90px] lg:px-[45px] md:px-[20px]">
				<h1>{title}</h1>
				<p className="py-4">{description}</p>
				<div className="text-left w-full">
					<button className="flex items-center space-x-2 tracking-[1rem]">
						SHOP NOW
						<span className="ml-4">
							<Image
								src={IconArrow}
								alt="Icon Arrow"
							/>
						</span>
					</button>
				</div>
			</div>
			<div className="bg-[#000] flex cursor-pointer col-start-6 lg:col-start-8 lg:col-end-9 row-start-3 md:row-start-6 md:col-start-8 md:col-end-10 z-10">
				<div className="w-1/2 m-auto" onClick={prevSlide}>
					<Image
						src={IconLeft}
						alt="Icon Left"
						height={24}
						width={14}
						className="m-auto"
					/>
				</div>
				<div className="w-1/2 m-auto" onClick={nextSlide}>
					<Image
						src={IconRight}
						alt="Icon Right"
						height={24}
						width={14}
						className="m-auto"
					/>
				</div>
			</div>
		</div>
	)
}

export default Slider;
