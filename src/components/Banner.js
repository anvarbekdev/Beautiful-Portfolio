import React from "react";
// typa animation
import { TypeAnimation } from "react-type-animation";
// images
import Image from "../assets/avatar.svg";
// icons
import { FaYoutube, FaGithub, FaDribbble } from "react-icons/fa";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";

const Banner = () => {
	return (
		<section
			className="section min-h-[85vh] lg:min-h-[78vh] flex items-center"
			id="home">
			<div className="container max-w-5xl mx-auto">
				<div className="flex flex-col  lg:flex-row lg:items-center lg:gap-x-12">
					{/* text */}
					<div className="flex-1 text-center font-secondary lg:text-left ">
						<motion.h1
							variants={fadeIn("up", 0.3)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[32px] font-bold leading-[1]  lg:text-[60px]">
							ANVARBEK <span>XAYDAROV</span>
						</motion.h1>
						<motion.div
							variants={fadeIn("up", 0.4)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[20px]  lg:text-[30px] font-secondary font-semibold uppercase leading-[1]">
							<span>I am a</span>
							<TypeAnimation
								sequence={[
									"Devaloper",
									2000,
									"Designer",
									2000,
									"Modeller",
									2000,
								]}
								speed={50}
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn("up", 0.5)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-2 max-w-lg mx-auto lg:mx-0 leading-5">
							Lorem ipsum dolor sit amet consectetur sssdsd dsdsdsd edwsedwed
							dwedwed dwededw
						</motion.p>
						<motion.div
							variants={fadeIn("up", 0.6)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex max-w-max gap-x-6 items-center my-6 mx-auto lg:mx-0">
							<button className="btn btn-lg">Contact me</button>
							<a href="#" className="text-gradient btn-link">
								My Portfolio
							</a>
						</motion.div>
						{/* socials */}
						<motion.div
							variants={fadeIn("up", 0.7)}
							initial="hidden"
							whileInView={"show"}
							viewport={{ once: false, amount: 0.7 }}
							className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
							<a href="#">
								<FaYoutube />
							</a>
							<a href="#">
								<FaGithub />
							</a>
							<a href="#">
								<FaDribbble />
							</a>
						</motion.div>
					</div>
					{/* image */}
					<motion.div
						variants={fadeIn("down", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.7 }}
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[402px]">
						<img src={Image} alt="" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
