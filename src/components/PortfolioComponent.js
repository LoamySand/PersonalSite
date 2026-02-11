import React from 'react';
import './portfolio.css';
import projects from './portfolioData';

function Portfolio() {
	return (
		<div className="portfolio-container">
			<h2 className="portfolio-heading">Portfolio</h2>
			<div className="portfolio-grid">
				{projects.map(project => (
					<div key={project.id} className="portfolio-card">
						{project.image && (
							<div className="portfolio-image-wrap">
								<img src={project.image} alt={project.title} className="portfolio-image"/>
							</div>
						)}
						<div className="portfolio-body">
							<h3 className="portfolio-title">{project.title}</h3>
							<p className="portfolio-desc">{project.description}</p>
							<div className="portfolio-tags">
								{project.tags.map(tag => (
									<span key={tag} className="portfolio-tag">{tag}</span>
								))}
							</div>
							{project.link && (
								<a className="portfolio-link" href={project.link} target="_blank" rel="noreferrer">View Project</a>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Portfolio;