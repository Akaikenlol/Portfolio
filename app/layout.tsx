import Navbar from "@/components/shared/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Onest } from "next/font/google";

const onset = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Keith Ken Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="scroll-smooth scrollbar ">
			<body className={`${onset.className} `}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
