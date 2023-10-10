import React from "react";
import Image from "next/image";

const Down = ({ target }: { target: string }) => {
	return (
		<div className="absolute w-[35px] h-[35px] overflow-hidden bottom-10 right-1/2 translate-x-1/2">
			<a href={target} className="scroll-smooth">
				<Image
					src="/assets/down-chevron.png"
					alt="down"
					fill
					className="object-cover"
				/>
			</a>
		</div>
	);
};

export default Down;
