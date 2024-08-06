import React from "react";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
// img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
	return (
		<div className="section lg:mt-96" id="work">
			<div className="container  max-w-5xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-x-10">
					<motion.div
						id="about"
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
						{/* text */}
						<div>
							<h2 className="h2 text-accent leading-tight">
								My Latest <br />
								Work.
							</h2>
							<p className="max-w-xs mb-4">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Perferendis neque magni omnis corrupti.
							</p>
							<button className="btn btn-sm">View all products</button>
						</div>
						{/* image */}
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							{/* overlay */}
							<div className="w-full group-hover:bg-black/70 h-full absolute z-40 transition-all duration-300"></div>
							{/* img */}
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={Img1}
								alt=""
							/>
							{/* pretitle */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">UI/UX Designer</span>
							</div>
							{/* title */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Project Title</span>
							</div>
						</div>
					</motion.div>
					<motion.div
						id="about"
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex-col gap-y-10">
						{/* image */}
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							{/* overlay */}
							<div className="w-full group-hover:bg-black/70 h-full absolute z-40 transition-all duration-300"></div>
							{/* img */}
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={Img2}
								alt=""
							/>
							{/* pretitle */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">UI/UX Designer</span>
							</div>
							{/* title */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Project Title</span>
							</div>
						</div>
						<div className="group relative overflow-hidden border-2 mt-10 border-white/50 rounded-xl">
							{/* overlay */}
							<div className="w-full group-hover:bg-black/70 h-full absolute z-40 transition-all duration-300"></div>
							{/* img */}
							<img
								className="group-hover:scale-125 transition-all duration-500"
								src={Img3}
								alt=""
							/>
							{/* pretitle */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">UI/UX Designer</span>
							</div>
							{/* title */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Project Title</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Work;
