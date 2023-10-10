import React from "react";
import Header from "../shared/header";
import Image from "next/image";
import Bottomnavbar from "../shared/bottomnavbar";
import Down from "../shared/down";
import Up from "../shared/up";

const ContactSection = () => {
	return (
		<section className="section flexCenter flex-col" id="contact">
			<Header label="Get In Touch" title="Contact Me" />
			<div className="border-2 border-black w-fit h-full rounded-3xl flexCenter px-10 py-10 gap-5">
				<div className="flex  items-center gap-5">
					<div className="relative w-[50px] h-[50px] overflow-hidden">
						<Image
							src="/assets/email.png"
							alt="email"
							className="object-cover"
							fill
						/>
					</div>
					<a
						className="text-xl underLine cursor-pointer"
						href="mailto:akaiken5656@gmail.com"
						target="_blank"
					>
						akaiken5656@gmail.com
					</a>
				</div>
				<div className="flex items-center gap-5">
					<div className="relative w-[50px] h-[50px] overflow-hidden">
						<Image
							src="/assets/phone-call.png"
							alt="email"
							className="object-cover"
							fill
						/>
					</div>
					<a
						className="text-2xl underLine cursor-pointer"
						href="tel:+959756526612"
					>
						+959756526612
					</a>
				</div>
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
			<Up />
		</section>
	);
};

export default ContactSection;
