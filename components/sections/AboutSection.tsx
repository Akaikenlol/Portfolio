import Image from "next/image";
import Header from "../shared/header";

const AboutSection = () => {
	return (
		<section className="section flex-col py-20 flexCenter " id="about">
			<Header label="Get To Know More" title="About" />
			<div className="flexCenter gap-20 w-full h-full ">
				<Image
					src="/assets/profile2.jpg"
					alt="logo2"
					className="object-cover rounded-3xl w-[450px] h-[450px]"
					width={300}
					height={300}
				/>
				<div className="flexBetween flex-col gap-5">
					<div className="flex justify-between items-center gap-5 w-full h-[200px]">
						<div className="border border-black rounded-3xl flexCenter flex-col h-full w-full">
							<Image
								src="/assets/badge.png"
								alt="badge"
								width={35}
								height={35}
							/>
							<p className="font-bold text-2xl mt-2">Experience</p>
							<p className="text-neutral-500">2+ years</p>
							<p className="text-neutral-500">Frontend Development</p>
						</div>
						<div className="border border-black rounded-3xl flexCenter flex-col h-full w-full">
							<Image
								src="/assets/graduation.png"
								alt="badge"
								width={35}
								height={35}
							/>
							<p className="font-bold text-2xl mt-2">Education</p>
							<p className="text-neutral-500">Diploma In Programming</p>
							<p className="text-neutral-500">HND In Software Engineering</p>
						</div>
					</div>
					<p className="text-neutral-600 text-xl max-w-[800px] w-full mt-10">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
