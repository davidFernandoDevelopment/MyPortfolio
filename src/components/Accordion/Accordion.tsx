import { useState } from 'react';
import Panel from './Panel';

interface IContent {
	label: string;
	content: React.ReactNode;
}

interface IDataAccordion {
	panels: IContent[];
}

const Accordion = (data: IDataAccordion) => {
	const [activeTab, setActiveTab] = useState(-1);

	const activateTab = (index: number) => () => {
		setActiveTab((prev) => (prev === index ? -1 : index));
	};

	return (
		<div className='c-accordion'>
			{data.panels.map((p, i) => (
				<Panel
					key={i}
					{...p}
					isActive={activeTab === i}
					activateTab={activateTab(i)}>
					<p>{p.content}</p>
				</Panel>
			))}
		</div>
	);
};

export default Accordion;
