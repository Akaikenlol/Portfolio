const Header = ({ label, title }: { label: string; title: string }) => {
	return (
		<div className="flexCenter flex-col gap-5">
			<p className="text-neutral-600 text-xl">{label}</p>
			<h1 className="text-4xl font-bold">{title}</h1>
		</div>
	);
};

export default Header;
