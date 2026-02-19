import React from 'react';
import experiences from './resumeData';

function Resume() {
	// Sort experiences by ID
	const sortedExperiences = [...experiences].sort((a, b) => a.id - b.id);

	return (
		<div className="resume-container">
			<div className="resume-timeline">
				{sortedExperiences.map((experience, index) => (
					<div key={experience.id} className="timeline-item">
						{/* Timeline Line */}
						<div className={`timeline-line ${index === sortedExperiences.length - 1 ? 'last' : ''}`}></div>
						
						{/* Timeline Node */}
						<div className="timeline-node"></div>

						{/* Timeline Date (25% width) */}
						<div className="timeline-date">{experience.startDate}</div>

						{/* Experience Content (75% width) */}
						<div className="timeline-content">
							<h6 className='display-6 fs-4'>{experience.title}</h6>
							<h6 className='display-6 fs-6'>{experience.subtitle}</h6>
							<blockquote className="blockquote fs-6">
								<p className="mb-0">{experience.description}</p>
							</blockquote>
						</div>
					</div>
				))}
			</div>
            <p className="text-center">Complete CV and Resume available <a href="/">upon request.</a></p>
		</div>
	);
}

export default Resume;
