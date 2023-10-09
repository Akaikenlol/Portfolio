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
						"I'm a junior web developer known for adding a creative touch to
						code, elevating digital projects into unique experiences. I approach
						web development as both a technical craft and an art form, where
						precision meets creativity. With a fusion of technical skills and a
						keen eye for design, I breathe life into websites, turning them into
						seamless and captivating digital solutions. I take pride in my
						ability to not just build websites, but to transform ideas into
						functional, elegant, and user-friendly online platforms." 🔮🌟🚀
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
