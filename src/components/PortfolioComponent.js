import React from 'react';
import './portfolio.css';
import projects from './portfolioData';

function Portfolio() {
	return (
		<div className="container py-5">
			<h2 className="text-center mb-4">Portfolio</h2>
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				{projects.map(project => (
					<div key={project.id} className="col">
						<div className="card h-100">
							{project.image && (
								<img src={project.image} alt={project.title} className="card-img-top"/>
							)}
							<div className="card-body">
								<h5 className="card-title">{project.title}</h5>
								<p className="card-text">{project.description}</p>
								<div className="d-flex flex-wrap gap-2">
									{project.tags.map(tag => (
										<span key={tag} className="badge bg-primary">{tag}</span>
									))}
								</div>
								{project.link && (
									<a className="btn btn-primary mt-3" href={project.link} target="_blank" rel="noreferrer">View Project</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Portfolio;