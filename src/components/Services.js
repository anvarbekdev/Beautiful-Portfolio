import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";

const services = [
	{
		name: "UI/UX Design",
		desc: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempora animi cupiditate delectus.",
		link: "Learn more",
	},
	{
		name: "Devalopment",
		desc: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempora animi cupiditate delectus.",
		link: "Learn more",
	},
	{
		name: "Digital Marketing",
		desc: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempora animi cupiditate delectus.",
		link: "Learn more",
	},
	{
		name: "Product Branding",
		desc: "	Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempora animi cupiditate delectus.",
		link: "Learn more",
	},
];
const Services = () => {
	return (
		<section className="mt-8 xs:mt-20" id="services">
			<div className="container max-w-5xl mx-auto">
				<div className="flex lg:h-[550px] flex-col lg:flex-row">
					{/* text */}
					<motion.div
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1  lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-24 lg:mb-0">
						<h2 className="h2 text-accent">What I Do.</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							I'm a Freelance Fullstack Devalopper with over 1 years of
							experience.
						</h3>
						<button className="btn btn-sm">See my work</button>
					</motion.div>
					{/* services  */}
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1">
						{/* service list */}
						<div>
							{services.map((a, index) => (
								<div
									key={index}
									className="border-b border-white/20 h-[146] mb-[38] flex">
									<div className="max-w-[420px]">
										<h4 className="text-[20px] tracking-wider font-semibold mb-6">
											{a.name}
										</h4>
										<p className="font-secondary leading-tight">{a.desc}</p>
									</div>
									<div className="flex flex-col flex-1 items-end">
										<a
											href="#"
											className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
											<BsArrowUpRight />
										</a>
										<a href="#" className="text-gradient text-sm">
											{a.link}
										</a>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
