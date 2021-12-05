import { useState } from 'react';
import { IDataSkills } from '../interfaces/IDataSkills';

const data: IDataSkills[] = [
	{
		icon: 'brackets-curly',
		type: 'Frontend developer',
		description: 'Más de 4 años',
		skills: [
			{ name: 'HTML', number: 90 },
			{ name: 'CSS', number: 80 },
			{ name: 'Javascript', number: 60 },
			{ name: 'React', number: 85 },
		],
	},
	{
		icon: 'server-network-alt',
		type: 'Backend developer',
		description: 'Más de 2 años',
		skills: [
			{ name: 'NodeJS', number: 70 },
			{ name: 'Javascript', number: 85 },
			{ name: 'Firebase', number: 90 },
			{ name: 'Python', number: 80 },
		],
	},
	{
		icon: 'swatchbook',
		type: 'Designer',
		description: 'Más de 2 años',
		skills: [
			{ name: 'Figma', number: 40 },
			{ name: 'Sketch', number: 85 },
			// { name: 'Photoshop', number: 90 },
		],
	},
];

const Skills = () => {
	const [activeTab, setActiveTab] = useState(-1);

	const activateTab = (index: number) => () => {
		setActiveTab((prev) => (prev === index ? -1 : index));
	};

	return (
		<section id='skills' className='c-skills o-layout-section'>
			<h2 className='o-layout-section__title'>Skills</h2>
			<span className='o-layout-section__subtitle'>Mi nivel técnico</span>
			<div className='c-skills__container o-layout-container o-layout-grid'>
				{data.map((d, i) => (
					<div
						key={i}
						className='c-skills__content'
						aria-expanded={activeTab === i}>
						<div className='c-skills__header' onClick={activateTab(i)}>
							<i className={`uil uil-${d.icon} c-skills__icon`}></i>
							<div>
								<h2 className='c-skills__title'>{d.type}</h2>
								<span className='c-skills__subtitle'>{d.description}</span>
							</div>
							<i className='uil uil-angle-down c-skills__arrow'></i>
						</div>
						<div className='c-skills__list o-layout-grid'>
							{d.skills.map((s, i) => (
								<div key={i} className='c-skills__data'>
									<div className='c-skills__titles'>
										<h3 className='c-skills__name'>{s.name}</h3>
										<span className='c-skills__number'>{s.number}</span>
									</div>
									<div className='c-skills__bar'>
										<span
											className={`c-skills__percentage o-layout-w-${s.number}`}></span>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
