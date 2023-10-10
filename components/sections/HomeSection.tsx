import Image from "next/image";
import Down from "../shared/down";

const HomeSection = () => {
	return (
		<section className="section flexCenter" id="home">
			<div className="flexCenter gap-36">
				<div className="rounded-full relative w-[500px] h-[500px] overflow-hidden">
					<Image
						src="/assets/profile1.jpg"
						alt="profile"
						className="object-cover"
						fill
					/>
				</div>
				<div className="flex flex-col items-center justify-center gap-5 font-bold">
					<p className="text-neutral-600 text-xl">Hello, I'm</p>
					<p className="text-5xl">Keith Ken</p>
					<p className="text-neutral-600 text-3xl">Jr Frontend Developer</p>
					<div className="flexCenter gap-5">
						{/* <button className="btn-1 border-black border-2 hover:bg-black hover:text-white ease-in-out duration-300"> */}
						<a
							href="/assets/Aungs_Resume.pdf"
							download="Aungs_Resume.pdf"
							className="btn-1 flexCenter border-black border-2 hover:bg-black hover:text-white ease-in-out duration-300"
						>
							Download CV
						</a>
						{/* </button> */}
						<button className="btn-1 bg-black text-white hover:bg-white hover:text-black ease-in-out duration-300 hover:border-2 hover:border-black ">
							<a href="mailto:akaiken5656@gmail.com" target="_blank">
								Contact
							</a>
						</button>
					</div>
					<div className="flexCenter gap-5">
						<a
							href="https://www.linkedin.com/in/aung-myo-thaw-010955223/"
							target="_blank"
						>
							<Image
								className="object-contain"
								src="/assets/linkedin-icon-1.svg"
								alt="logo"
								width={30}
								height={30}
							/>
						</a>

						<a href="https://github.com/Akaikenlol" target="_blank">
							<Image
								className="object-contain "
								src="/assets/github-icon-1.svg"
								alt="logo"
								width={35}
								height={35}
							/>
						</a>
					</div>
				</div>
				<Down target="#about" />
			</div>
		</section>
	);
};

export default HomeSection;
