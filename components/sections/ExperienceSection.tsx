import Image from "next/image";
import Header from "../shared/header";

const ExperienceSection = () => {
	const language = [
		{ name: "HTML", experience: "Experienced" },
		{ name: "CSS", experience: "Experienced" },
		{ name: "Javascript", experience: "Intermediate" },
		{ name: "Next JS", experience: "Intermediate" },
		{ name: "React", experience: "Basic" },
		{ name: "Tailwind", experience: "Experienced" },
		{ name: "Typescript", experience: "Intermediate" },
	];

	const backend = [
		{ name: "Figma", experience: "Intermediate" },
		{ name: "Node JS", experience: "Intermediate" },
		{ name: "Prisma", experience: "Intermediate" },
		{ name: "PostgreSQL", experience: "Intermediate" },
		{ name: "MongoDB", experience: "Intermediate" },
		{ name: "Git", experience: "Intermediate" },
	];

	return (
		<section className="section flexCenter flex-col" id="experience">
			<Header label="Explore My" title="Experience" />
			<div className="w-full flex gap-5">
				<div className="border border-black rounded-3xl flexCenter flex-col h-full w-full px-5 py-10">
					<p className="font-bold text-4xl mt-2 text-neutral-500 mb-10">
						Frontend Development
					</p>

					<div className="grid grid-cols-2 gap-x-32 gap-10">
						{language.map((item, i) => (
							<div className="flex gap-5" key={i}>
								<Image
									src="/assets/checked.png"
									alt="badge"
									width={30}
									height={30}
									className="w-[30px] h-[30px]"
								/>
								<div className="flex flex-col">
									<p className="font-bold text-xl">{item.name}</p>
									<p className="text-neutral-500 text-xl">{item.experience}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="border border-black rounded-3xl flexCenter flex-col h-full w-full px-5 py-10">
					<p className="font-bold text-4xl mt-2 text-neutral-500 mb-10">
						Additional Skills
					</p>

					<div className="grid grid-cols-2  gap-x-32 gap-10">
						{backend.map((item, i) => (
							<div className="flex gap-5" key={i}>
								<Image
									src="/assets/checked.png"
									alt="badge"
									width={30}
									height={30}
									className="w-[30px] h-[30px]"
								/>
								<div className="flex flex-col">
									<p className="font-bold text-xl">{item.name}</p>
									<p className="text-neutral-500 text-xl">{item.experience}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
