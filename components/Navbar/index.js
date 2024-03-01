'use client'

import { useState } from 'react';
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Hamburger from "../../public/icon-hamburger.svg";
import Close from "../../public/icon-close.svg";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="relative">
			{/* Header content */}
			<div className="flex justify-between items-center min-w-[360px] px-4 sm:px-6 lg:px-8">
				{/* Hamburger menu icon */}
				<button className="sm:hidden" onClick={() => setIsMenuOpen(true)}>
					<Image
						src={Hamburger}
						width={24}
						height={24}
						alt="Open menu"
					/>
				</button>

				<div className="flex-1 flex justify-center sm:justify-start">
					<Image
						src={Logo}
						width={60}
						height={10}
						alt="Company Logo"
					/>
				</div>

				<ul className="hidden sm:flex list-none space-x-4">
					<li>home</li>
					<li>shop</li>
					<li>about</li>
					<li>contact</li>
				</ul>
			</div>

			{/* Modal for small screens */}
			{isMenuOpen && (
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-end">
					{/* Modal content */}
					<div className="bg-white p-4 w-full h-[100px]">
						<button onClick={() => setIsMenuOpen(false)}>
							<Image
								src={Close}
								width={24}
								height={24}
								alt="Close menu"
							/>
						</button>
						<ul className="flex items-center space-y-4 text-black">
							<li>home</li>
							<li>shop</li>
							<li>about</li>
							<li>contact</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}

export default Header;
