import React from "react";
import Header from "../shared/header";
import Image from "next/image";
import Bottomnavbar from "../shared/bottomnavbar";

const ContactSection = () => {
	return (
		<section className="section flexCenter flex-col" id="contact">
			<Header label="Get In Touch" title="Contact Me" />
			<div className="border-2 border-black w-fit h-full rounded-3xl flexCenter px-10 py-10 gap-5">
				<div className="relative w-[50px] h-[50px] overflow-hidden">
					<Image
						src="/assets/email.png"
						alt="email"
						className="object-cover"
						fill
					/>
				</div>
				<p className="text-xl underLine cursor-pointer">
					akaiken5656@gmail.com
				</p>
				<div className="relative w-[50px] h-[50px] overflow-hidden">
					<Image
						src="/assets/linkedin.png"
						alt="email"
						className="object-cover"
						fill
					/>
				</div>
				<p className="text-2xl underLine cursor-pointer">Linkedin</p>
			</div>
			<div className="mt-28">
				<Bottomnavbar />
				<div className="flexCenter gap-2 text-xl text-neutral-600">
					<p>Copy Right</p>
					<div className="relative w-[20px] h-[20px] overflow-hidden">
						<Image
							src="/assets/copyright.png"
							alt="copyright"
							className="object-cover"
							fill
						/>
					</div>
					<p>2023 Keith Ken.</p>
					<p>All Rights Reserved.</p>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
