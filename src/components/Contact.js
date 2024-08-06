import React from "react";
// variants
import { fadeIn } from "../variants";
// motion
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div className="py-18 lg:section" id="contact">
			<div className="container max-w-5xl  mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text */}
					<motion.div
						variants={fadeIn("left", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex justify-start items-center">
						<div>
							<h4
								className="text-xl uppercase text-accent font-medium mb2
							 tracking-wide">
								Get in touch
							</h4>
							<h2
								className="text-[35px] lg:text-[90px] leading-none mb-12
							">
								Let's work <br /> together!
							</h2>
						</div>
					</motion.div>
					{/* form */}
					<motion.form
						variants={fadeIn("right", 0.3)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
						action="">
						<input
							type="text"
							placeholder="Your name"
							className="border-b bg-transparent py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
						/>
						<input
							type="email"
							placeholder="Your email"
							className="border-b bg-transparent py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
						/>
						<textarea
							placeholder="Your Message"
							className="border-b bg-transparent py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
						/>
						<button className="btn btn-lg">Send message</button>
					</motion.form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
