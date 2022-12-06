import { Link } from "react-router-dom";
import { Data } from "./Data";

const Content = () => {
	return (
		<section className="bg-gray-900 text-white">
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="text-3xl font-bold sm:text-4xl">
						Comprehensive underneath, simple on the surface
					</h2>
				</div>
				<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{Data.map((data) => {
						return (
							<Link
								key={data.id}
								to="/"
								className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal-500/10 hover:shadow-teal-500/10"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="h-10 w-10 text-teal-500"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
									></path>
								</svg>

								<h2 className="mt-4 text-xl font-bold text-white">
									{data.name}
								</h2>

								<p className="mt-1 text-sm text-gray-300">{data.message}</p>
							</Link>
						);
					})}
				</div>

				<div className="mt-12 text-center">
					<Link
						href="#"
						className="mt-8 inline-flex items-center rounded border border-teal-600 bg-teal-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-teal-500"
					>
						<span className="text-sm font-medium"> Get Started </span>

						<svg
							className="ml-3 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Content;
