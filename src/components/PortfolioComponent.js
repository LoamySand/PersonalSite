import React from 'react';
import projects from './portfolioData';

function Portfolio() {
	// Sort projects by ID
	const sortedProjects = [...projects].sort((a, b) => a.id - b.id);

	return (
		<div className="container p-3">
			<h2 className="text-center mb-4">Portfolio</h2>
			<div className="row row-cols-1 row-cols-md-2 g-3">
				{sortedProjects.map(project => (
					<div key={project.id} className="col">
						<div className="card h-100 p-4 m-2">
							{project.image && (
								<img src={project.image} alt={project.title} className="card-img-top"/>
							)}
							<div className="card-body flex-wrap flex-column d-flex h-auto">
								<h5 className="card-title">{project.title}</h5>
								<p className="card-text">{project.description}</p>
								<div className="d-flex flex-wrap gap-3">
									{project.tags.map(tag => (
										<span key={tag} className="badge badge-disabled fw-light">{tag}</span>
									))}
								</div>
								<div className="d-flex flex-wrap gap-4 mt-auto align-self-start">
									{project.demoLink && (
										<a className="btn btn-primary" href={project.demoLink} target="_blank" rel="noreferrer">View Demo</a>
									)}
									{project.codeLink && (
										<a className="btn btn-primary" href={project.codeLink} target="_blank" rel="noreferrer">View Code</a>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Portfolio;