import React from "react";

const Bottomnavbar = () => {
	return (
		<header className="w-full">
			<div className="flexBetween max-w-7xl mx-auto py-12 px-2 ">
				<div>
					<nav>
						<ul className="flex gap-6 items-center text-2xl">
							<li>
								<a href="#about" className="underLine">
									About
								</a>
							</li>
							<li>
								<a href="#experience" className="underLine">
									Experience
								</a>
							</li>
							<li>
								<a href="#project" className="underLine">
									Projects
								</a>
							</li>
							<li>
								<a href="#contact" className="underLine">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Bottomnavbar;
