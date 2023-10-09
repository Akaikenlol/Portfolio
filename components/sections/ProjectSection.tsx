import React from "react";
import Header from "../shared/header";
import Image from "next/image";

const ProjectSection = () => {
	return (
		<section className="section flexCenter flex-col" id="project">
			<Header label="Browse My Recent" title="Projects" />
			<div className="flexCenter gap-10">
				<div className="border-2 border-black w-full h-full rounded-3xl flexCenter flex-col px-10 py-10 gap-5">
					<div className="rounded-sm relative w-[300px] h-[300px] overflow-hidden">
						<Image
							src="/assets/threads.png"
							alt="threads"
							className="object-cover p-16 "
							fill
						/>
					</div>

					<p className="text-4xl font-bold">Threads</p>
					<div className="flex gap-5">
						<button className="btn-1 border-2 border-black  text-black hover:bg-black hover:text-white ease-in-out duration-300 ">
							Github
						</button>
						<button className="btn-1 border-2 border-black  text-black hover:bg-black hover:text-white ease-in-out duration-300 ">
							Live Demo
						</button>
					</div>
				</div>
				<div className="border-2 border-black w-full h-full rounded-3xl flexCenter flex-col px-10 py-10 gap-5">
					<div className="rounded-sm relative w-[300px] h-[300px] overflow-hidden">
						<Image
							src="/assets/web.png"
							alt="threads"
							className="object-cover p-16"
							fill
						/>
					</div>

					<p className="text-4xl font-bold">Promptopia</p>
					<div className="flex gap-5">
						<button className="btn-1 border-2 border-black  text-black hover:bg-black hover:text-white ease-in-out duration-300 ">
							Github
						</button>
						<button className="btn-1 border-2 border-black  text-black hover:bg-black hover:text-white ease-in-out duration-300 ">
							Live Demo
						</button>
					</div>
				</div>
				<div className="border-2 border-black w-full h-full rounded-3xl flexCenter flex-col px-10 py-10 gap-5">
					<div className="rounded-sm relative w-[300px] h-[300px] overflow-hidden">
						<Image
							src="/assets/booking.png"
							alt="threads"
							className="object-cover p-16"
							fill
						/>
					</div>

					<p className="text-4xl font-bold">Open Table</p>
					<div className="flex gap-5">
						<button className="btn-1 border-2 border-black  text-black hover:bg-black hover:text-white ease-in-out duration-300 ">
							Github
						</button>
						<button className="btn-1 border-2 border-black  text-black hover:bg-black hover:text-white ease-in-out duration-300 ">
							Live Demo
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;
