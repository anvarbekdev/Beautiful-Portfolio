import React from "react";
import Logo from "../assets/myLogo.png";
const Header = () => {
	return (
		<header className="py-4">
			<div className="container max-w-3xl mx-auto px-12">
				<div className="flex justify-between items-center">
					<a href="#">
						<img className="w-16 rounded-md" src={Logo} alt="" />
					</a>
					<button className="btn btn-sm">Work with me</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
