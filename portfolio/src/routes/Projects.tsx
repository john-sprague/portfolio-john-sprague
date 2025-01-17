import { Link } from "react-router-dom";
import { Card } from "../components/Card";

const Projects = () => {
	return (
		<div className="relative pb-16">
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p>
				</div>
			<div className="w-full h-px bg-zinc-800" />
				<div className='grid grid-cols-2 gap 8 mx-auto lg:grid-cols-2'>
					<Card >
						<Link to='projects/sample'>
							<div className="text-center space-y-2 sm:text-left">
								<div className="space-y-0.5">
								<p className="text-lg text-black font-semibold">
									John Sprague
								</p>
								<p className="text-slate-500 font-medium">
									Sample Project
								</p>
								</div>
								<button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
							</div>	
						</Link>					
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Projects;
