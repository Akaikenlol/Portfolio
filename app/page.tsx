import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<HomeSection />
			<AboutSection />
			<ExperienceSection />
		</>
	);
}
