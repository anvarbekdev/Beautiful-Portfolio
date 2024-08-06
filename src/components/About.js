import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";
const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	});

	return (
		<section className="section h-[900px]">
			<div className="container  max-w-5xl mx-auto">
				<div className="lg:flex flex-col lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 ">
					{/* img */}
					<motion.div
						id="about"
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top"></motion.div>
					{/* text */}
					<motion.div
						ref={ref}
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.1 }}
						className="flex-1">
						<h2 className="h2 text-accent">About me.</h2>
						<h3 className="h3 mb-4">
							I'm a Freelance Fullstack Devalopper with over 1 years of
							experience.
						</h3>
						<p className="mb-6">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
							deserunt eveniet inventore?
						</p>
						{/* stats */}
						<div className="flex gap-x-6 lg:gap-x-6 mb-1">
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={13} duration={13} /> : null}
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Years of <br /> Experience
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={15} duration={15} /> : null}
									k+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Projects <br /> Completed
								</div>
							</div>
							<div>
								<div className="text-[40px] font-tertiary text-gradient mb-2">
									{inView ? <CountUp start={0} end={12} duration={12} /> : null}
									k+
								</div>
								<div className="font-primary text-sm tracking-[2px]">
									Satisfied <br /> Clients
								</div>
							</div>
						</div>
						<div className="flex gap-x-8 items-center">
							<button className="btn btn-lg">Contact me</button>
							<a href="#" className="text-gradient btn-link">
								My Portfolio
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
