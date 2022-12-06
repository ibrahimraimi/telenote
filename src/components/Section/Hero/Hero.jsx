import { NavLink } from "react-router-dom";

const Hero = () => {
	return (
		<section className="bg-white text-white dark:bg-gray-900">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="bg-gradient-to-r from-teal-600 via-teal-300 to-teal-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Telenote ensures that developers stay organized.
					</h1>
					<p className="mx-auto mt-6 max-w-xl sm:text-xl sm:leading-relaxed">
						Telenote provides users with an easy to use platform for writing,
						editing, and organizing notes using the popular markdown syntax.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<NavLink
							to="/"
							className="block w-full rounded border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
						>
							Get Started
						</NavLink>
						<NavLink
							to="/"
							className="block w-full rounded border border-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
						>
							Learn More
						</NavLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
