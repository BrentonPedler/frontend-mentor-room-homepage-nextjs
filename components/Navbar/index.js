'use client'

import { useState } from 'react';
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Hamburger from "../../public/icon-hamburger.svg";
import Close from "../../public/icon-close.svg";

const Header = () => {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);

	return (
		<div className="relative">
			<div className="flex w-full px-4 sm:px-6 lg:px-8">
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

				<ul className="hidden sm:flex list-none space-x-4 text-white">
					<li>home</li>
					<li>shop</li>
					<li>about</li>
					<li>contact</li>
				</ul>
			</div>

			{/* Modal for small screens */}
			{isMenuOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-start sm:hidden">
					{/* Modal content */}
					<div className="w-full flex items-center h-24 bg-white relative">
						<button className='absolute left-6 top-1/2 transform -translate-y-1/2' onClick={() => setIsMenuOpen(false)}>
							<Image
								src={Close}
								width={24}
								height={24}
								alt="Close menu"
							/>
						</button>
						<ul className="flex items-center gap-6 text-black ml-auto pr-6">
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
