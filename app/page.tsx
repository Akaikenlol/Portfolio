import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectSection from "@/components/sections/ProjectSection";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<HomeSection />
			<AboutSection />
			<ExperienceSection />
			<ProjectSection />
			<ContactSection />
		</>
	);
}
