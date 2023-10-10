import Image from "next/image";

const Up = () => {
	return (
		<div className="absolute w-[35px] h-[35px] overflow-hidden bottom-10 right-1/2 translate-x-1/2">
			<a href="#home">
				<Image
					src="/assets/up-chevron.png"
					alt="down"
					fill
					className="object-cover"
				/>
			</a>
		</div>
	);
};

export default Up;
